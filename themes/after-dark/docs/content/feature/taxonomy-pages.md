+++
title = "Taxonomy Pages"
description = "Navigate the site using author-defined taxonomies."
categories = ["navigation"]
tags = ["links", "taxonomy"]
features = ["related content", "code highlighter", "snippets"]
aliases = [
  "/feature/page-taxonomies/"
]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark generates categorical and tag taxonomy and taxonomy terms pages and links to them automatically in posts using [Post Bylines](../post-bylines).

Given the following page {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}} for a post type:

```toml
categories = ["navigation"]
tags = ["links", "taxonomy"]
```

The following taxonomy links would appear in the byline:

> Published [by `author`] [`publishdate` or `date`] in [navigation](/categories/navigation) and tagged [links](/tags/links) and [taxonomy](/tags/taxonomy) using [`wordcount`] words.

The following [Index Blocked](../index-blocking) taxonomy pages generated:

- [/categories/index.html](/categories/index.html)
- [/categories/navigation/index.html](/categories/navigation/index.html)
- [/tags/index.html](/tags/index.html)
- [/tags/links/index.html](/tags/links/index.html)
- [/tags/taxonomy/index.html](/tags/taxonomy/index.html)

The following taxonomic web feeds created:

- [/categories/index.xml](/categories/index.xml)
- [/categories/navigation/index.xml](/categories/navigation/index.xml)
- [/tags/index.xml](/tags/index.xml)
- [/tags/links/index.xml](/tags/links/index.xml)
- [/tags/taxonomy/index.xml](/tags/taxonomy/index.xml)

The {{< external href="https://gohugo.io/templates/sitemap-template/" text="Sitemap" />}} and [Related Content](../related-content) updated and, if activated, the [Fuzzy Search](../fuzzy-search) JSON search index (weighted on taxonomy) regenerated, all automatically.

See {{< external href="https://gohugo.io/content-management/taxonomies" text="Taxonomies in Hugo" />}} to learn about taxonomies and how to customize them.
