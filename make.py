import htmlmin
from jinja2 import Environment, FileSystemLoader
import json
import os
import rjsmin

from script.compile import compile

document_root = "docs"

environment = Environment(loader=FileSystemLoader("template/"))

languages = None
with open("template/language.json", mode="r", encoding="utf-8") as language_file:
    languages = json.load(language_file)
for i in range(0, len(languages)):
    languages[i]['index'] = i
    
index_template = environment.get_template("index.html")
index_src = htmlmin.minify(index_template.render(languages=languages))
with open(os.path.join(document_root, "index.html"), mode="w", encoding="utf-8") as index_file:
    index_file.write(index_src)
index_template = index_src = None

converters = "["
for l in languages:
    converters += compile(l) + ','
converters += "]"    
    
script_template = environment.get_template("script.js")
script_src = rjsmin.jsmin(script_template.render(converter_functions=converters))
with open(os.path.join(document_root, "script.js"), mode="w", encoding="utf-8") as script_file:
    script_file.write(script_src)
script_template = script_src = None

test_template = environment.get_template("test.html")
test_src = htmlmin.minify(test_template.render())
with open(os.path.join(document_root, "test.html"), mode="w", encoding="utf-8") as test_file:
    test_file.write(test_src)
test_template = test_src = None
