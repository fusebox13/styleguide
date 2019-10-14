import glob, os

if not os.path.isdir('src/code'):
    os.mkdir('src/code')

os.chdir("src/components")
globs = glob.glob("*.vue")
for file in globs:
    content = open(file)
    output = open("../code/" + file.replace('.vue', '.js'), 'w')
    output.write("let code = `\n")
    output.write(content.read())
    output.write("`;\n\n")
    output.write("export default code;")
    output.close()
