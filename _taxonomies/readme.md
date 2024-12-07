# Why create files for categories and tags in this folder

## Issue
jekyll-archive only lists posts for categories that have been attributed to posts.
If a collection has been assigned a category, it will NOT show up in the archive.
Only posts

Without a solution, it will result in the following :
- if a collection + a post have been assigned a category, only the post will appear in the archive giving a false sense of success in displaying related content
- if a collection has been assigned a category but no post, jekyll will redirect the user to a 404 page


## The Solution
Create category_name.md with empty frontmatter (eg : "personal-development.md") so that all custom collections, pages and posts appear in the archive provided by focus/single-taxonomy.html.

## Note
Categories' descriptions are defined in data/categories.yml
[!] rename taxonimies.yml?

## Important
Maintain parity between files in this folder (_taxonimies) and categories/tags defined in taxonomies.yml