import htmlmin
from jinja2 import Environment, FileSystemLoader
import rjsmin

environment = Environment(loader=FileSystemLoader("template/"))

index_template = environment.get_template("index.html")
index_src = htmlmin.minify(index_template.render())
with open("public/index.html", mode="w", encoding="utf-8") as index_file:
    index_file.write(index_src)
index_template = index_src = None

script_template = environment.get_template("script.js")
script_src = rjsmin.jsmin(script_template.render(converter_functions="[]"))
with open("public/script.js", mode="w", encoding="utf-8") as script_file:
    script_file.write(script_src)
script_template = script_src = None
