Use this to include the **content** of the current file that is located in a *content* folder using the exact same name with "_content" appended


{% highlight liquid %}
    {% assign post_date = page.date | date: "%Y-%m-%d" %}       
    {% assign post_slug = page.title | slugify %}
    {% assign full_post_filename = post_date | append: "-" | append: post_slug %} 
    {% include_relative content/{{ full_post_filename }}.md %}
{% endhighlight %}