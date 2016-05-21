require 'rake'
require 'time'

desc 'Preview the site with Jekyll'
task :preview do
    sh "jekyll serve --watch --drafts --baseurl '' --config _config.yml,_config-dev.yml"
end

desc 'Search site and print specific deprecation warnings'
task :check do 
    sh "jekyll doctor"
end

desc 'create a new draft post'
task :post do
    title = ENV['TITLE']
    slug = "#{Date.today}-#{title.downcase.gsub(/[^\w]+/, '-')}"

    file = File.join(
        File.dirname(__FILE__),
        '_posts',
        slug + '.markdown'
    )

    File.open(file, "w") do |f|
        f << <<-EOS
---
layout: post
title: #{title}
author: #{`whoami`.chomp}
published: false
categories: awesome
images:
  - "https://placekitten.com/826/516"
  - "https://placekitten.com/827/517"
  - "https://placekitten.com/828/518"
video: "https://player.vimeo.com/video/70984663"
---

This is the main blog post content.  The first paragraph is what will appear on the blog's short snippet.

<!-- The first paragraph will appear as the excerpt on the blog langing page -->
<!-- Place the rest of your blog's content below here -->

Add the rest of your blog post here.

IMPORTANT:

  You can only choose one blog type, image, images, or video.
  If you leave all three, you'll see ugliness when you render the blog post in a browser.
  Be nice and only choose image, images, or video.  Delete the other two.

EOS
    end

    system ("#{ENV['EDITOR']} #{file}")
end

desc 'Create a new category page'
task :category do
  title = ENV['TITLE']

  file = File.join(
      File.dirname(__FILE__),
      'blog',
      'categories',
      title.downcase.gsub(' ', '-') + '.markdown'
  )

  File.open(file, "w") do |f|
      f << <<-EOS
---
layout: default
title: another unreasonable opinion from - #{title} Category
---

{% include blog_category.html category="#{title.downcase}" %}

EOS
  end

  system ("#{ENV['EDITOR']} #{file}")
end
