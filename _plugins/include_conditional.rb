module Jekyll
  class IncludeConditionalTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      @params = {}
      markup.scan(Liquid::TagAttributes) do |key, value|
        @params[key] = value
      end
      @file = @params['file'].strip
      @folder = @params['myfolder'] ? @params['myfolder'].strip : nil
    end

    def render(context)
      includes_dir = context.registers[:site].config['includes_dir'] || '_includes'
      file_path = File.join(includes_dir, @file)
      folder_file_path = File.join(includes_dir, @folder, @file) if @folder

      if @folder && File.exist?(folder_file_path)
        partial = File.read(folder_file_path)
        partial_rendered = Liquid::Template.parse(partial).render(context)
        partial_rendered
      elsif File.exist?(file_path)
        partial = File.read(file_path)
        partial_rendered = Liquid::Template.parse(partial).render(context)
        partial_rendered
      else
        "<!-- Include file #{@file} does not exist in either #{@folder} or root includes directory -->"
      end
    end
  end
end

Liquid::Template.register_tag('include_conditional', Jekyll::IncludeConditionalTag)