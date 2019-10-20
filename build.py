import glob
import os
from py_modules.coderenderer.js import TemplateInterpolator


def main():
    map = {
        "example": "HelloWorld",
        "address": "1600 Main Street",
        "lang": "html"
    }
    interpolator = TemplateInterpolator(map)

    interpolator.populate_template()

    template = TemplateInterpolator.populate_template('src/templates/StyleguidePage.template', map)

    if not os.path.isdir('src/compiled_templates'):
        os.mkdir('src/compiled_templates')
    print(os.getcwd())
    output = open('src/compiled_templates/output.vue', "w+")
    output.write(template)
    output.close()
    # if not os.path.isdir('src/code'):
    #     os.mkdir('/src/code')
    #
    # os.chdir("src/components")
    # globs = glob.glob("*.vue")
    # for file in globs:
    #     content = open(file)
    #     output = open("../code/" + file.replace('.vue', '.js'), 'w')
    #     output.write("let code = `\n")
    #     output.write(content.read())
    #     output.write("`;\n\n")
    #     output.write("export default code;")
    #     output.close()


main()
print('Complete')