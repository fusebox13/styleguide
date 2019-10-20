import os
import re


class TemplateInterpolator:
    config = {}

    def __init__(self, config):
        self.config = config

    @staticmethod
    def populate_template(template_path, keymap):
        template_stream = open(template_path)
        template = template_stream.read()

        for key, value in keymap.items():
            placeholder = f'{{{key}}}'
            template = re.sub(r'(?<!{)' + re.escape(placeholder) + r'(?!})', value, template)

        template_stream.close()
        return template
