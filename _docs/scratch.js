# File
file: ${fileID}
permalink: /${permalink}
content_file: "[[${contentFolder}/${fileID}.md]]"
aliases: 
  - ${aliases.join('\n  - ')}  
lang: ${lang}
sitemap: ${sitemap}
hidden: ${hidden}
allow_recursion: ${allow_recursion}

# Layout
layout: ${layout}
template: ${template}
classes:  

# Content
title:  ${title}
title_before: ${title_before}
title_after:  ${title_after}
subtitle: ${subtitle}
description: ${description}
excerpt: ${excerpt}
custom_excerpt: ${custom_excerpt}
featured_image: ${featured_image}
caption: ${caption}
teaser_image: ${teaser_image}
featured_logo: ${featured_logo}
categories:
  - ${categories.join('\n  - ')}
tags:
  - ${tags.join('\n  - ')}
info-1: 
  - ${info1.join('\n  - ')}  
info-2: 
  - ${info2.join('\n  - ')}
taxonomy: ${taxonomy}
collection: ${collection}
entries_layout: : ${entries_layout}

# Meta
featured: ${featured}
priority: ${priority}
status: ${status}
author: ${author}
author_profile: ${author_profile}
date: ${date}
last_modified_at: ${last_modified_at}
show_page_title: ${show_page_title}
show_date: ${show_date}
show_footer_date: ${show_footer_date}
show_pagination: ${show_paginationt}
show_taxonomy: ${show_taxonomy}
comments: ${comments}
read_time: ${read_time}
related: ${related}
share: ${share}

# Navigation
navigation: ${navigation}
breadcrumbs: ${breadcrumbs}
resource: ${resource}