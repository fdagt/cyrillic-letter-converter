import htmlmin
from jinja2 import Environment, FileSystemLoader
import json
import rjsmin

from script.compile import compile

environment = Environment(loader=FileSystemLoader("template/"))

languages = None
with open("template/language.json", mode="r", encoding="utf-8") as language_file:
    languages = json.load(language_file)
for i in range(0, len(languages)):
    languages[i]['index'] = i
    
index_template = environment.get_template("index.html")
index_src = htmlmin.minify(index_template.render(languages=languages))
with open("public/index.html", mode="w", encoding="utf-8") as index_file:
    index_file.write(index_src)
index_template = index_src = None

converters = "["
for l in languages:
    converters += compile(l) + ','
converters += "]"    
    
script_template = environment.get_template("script.js")
script_src = rjsmin.jsmin(script_template.render(converter_functions=converters))
with open("public/script.js", mode="w", encoding="utf-8") as script_file:
    script_file.write(script_src)
script_template = script_src = None
