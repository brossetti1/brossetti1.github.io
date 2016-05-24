---
layout: post
title:  "What is Jekyll!"
date:   2014-07-28 22:48:45
description: Jekyll is a static site generator, an open-source tool for creating simple yet powerful websites of all shapes and sizes.
categories:
- blog
- jekyll
---

[Jekyll][jekyll] is a static site generator, an open-source tool for creating simple yet powerful websites of all shapes and sizes. Here is a little quote from the official website:

> It takes a template directory containing raw text files in various formats, runs it through [Markdown][markdown] (or [Textile][textile]) and Liquid converters, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server. Jekyll also happens to be the engine behind [GitHub Pages][github-pages], which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers for free.
> - jekyllrb.com

{% highlight css %}

.no-svg footer.main-footer ul.social-media li a {
  width: 32px;
    height: 32px;
    background-color: $base-07;
    background-image: url("images/socials-icons.png");
    background-size: 224px 64px;
    border-radius: 0.25em;
    @include transition(background-color 0.2s);
    border-bottom-color: transparent;

    &:hover {
      background-color: $coffee-light;
    }
}

div.page-content {
  @extend .default-page-content;
  min-height: initial;

  @include MQ(M) {
    min-height: 400px;
  }
}    

{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll's GitHub repo][jekyll-gh].

[jekyll-gh]: https://github.com/mojombo/jekyll
[jekyll]:    http://jekyllrb.com
[markdown]: http://daringfireball.net/projects/markdown/
[textile]: http://redcloth.org/textile
[github-pages]: http://pages.github.com/
