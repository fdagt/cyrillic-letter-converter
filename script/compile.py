
def javascript_string_literal(s):
    return '"' + s.replace('"', '\\"').replace('\\', '\\\\') + '"'
    
class NodeF:
    def __init__(self):
        self.children = {}
        self.value = None
        
class Node:
    def __init__(self):
        self.children = {}
        self.value = None

    def __getitem__(self, key):
        if key == '':
            return self.value
        initial = ord(key[0])
        if initial in self.children:
            return self.children[initial][key[1:]]
        else:
            return None

    def __setitem__(self, key, value):
        if key == '':
            self.value = value
            return value
        initial = ord(key[0])
        if initial not in self.children:
            self.children[initial] = Node()
        self.children[initial][key[1:]] = value
        return value

    def fold(self, f):
        node = NodeF()
        node.value = self.value
        for ch, child in self.children.items():
            node.children[ch] = child.fold(f)
        return f(node)

    def transcript(self, s):
        out = ''
        while len(s) > 0:
            x, r = self.__transcript_begin(s)
            out += x
            s = r
        return out

    def __transcript_begin(self, s):
        last_valid_node = None
        last_valid_index = -1
        current_node = self
        current_index = -1
        while True:
            next_index = current_index + 1
            if next_index >= len(s):
                break
            next = ord(s[next_index])
            if next in current_node.children:
                current_node = current_node.children[next]
                current_index = next_index
                if current_node.value != None:
                    last_valid_node = current_node
                    last_valid_index = current_index
            else:
                break
        if current_index == -1:
            return s[0], s[1:]
        elif last_valid_node == None:
            return s[0:current_index+1], s[current_index+1:]
        else:
            return last_valid_node.value, s[last_valid_index+1:]

    def apply_completion(self):
        def helper(node, s):
            if node.value == None:
                node.value = self.transcript(s)
            for k, v in node.children.items():
                helper(v, s + chr(k))
        helper(self, '')

    def compile(self):
        def build_statements(node):
            code = "if (index >= inputText.length) {"
            if node.value != None:
                code += "output += {:s};".format(javascript_string_literal(node.value))
            code += "break topLoop;}"
            code += "switch (inputText.codePointAt(index++)) {"
            for k, v in node.children.items():
                code += "case {:d}: {:s} break;".format(k, v)
            code += "default:"
            if node.value != None:
                code += "output += {:s}; index--;".format(javascript_string_literal(node.value))
            else:
                code += "output += inputText[index-1];"
            code += "}";
            return code
        self.apply_completion()
        self.value = None
        return """function (inputText) {{
  let index = 0;
  let output = "";
  topLoop: while (true) {{
    {:s}
  }}
  return output;
}}""".format(self.fold(build_statements))
        
def compile(language):
    tree = Node()
    for k, v in language['transcription'].items():
        tree[k] = v
        v_upper = v.upper()
        k_upper = k.upper()
        k_first_upper = k[0].upper() + k[1:]
        if v_upper != v:
            if k_upper != k:
                tree[k_upper] = v_upper
            if k_first_upper != k_upper and k_first_upper != k:
                tree[k_first_upper] = v_upper
    return tree.compile()
