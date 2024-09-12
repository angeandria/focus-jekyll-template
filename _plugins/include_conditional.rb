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
      folder_file_path = File.join(includes_dir, @folder, @file) if @folder
      root_file_path = File.join(includes_dir, @file)

      output = ""

      if @folder && File.exist?(folder_file_path)
        folder_partial = File.read(folder_file_path)
        folder_partial_rendered = Liquid::Template.parse(folder_partial).render(context)
        output += folder_partial_rendered
      end

      if File.exist?(root_file_path)
        root_partial = File.read(root_file_path)
        root_partial_rendered = Liquid::Template.parse(root_partial).render(context)
        output += root_partial_rendered
      end

      output.empty? ? "<!-- Include files not found -->" : output
    end
  end
end

Liquid::Template.register_tag('include_conditional', Jekyll::IncludeConditionalTag)