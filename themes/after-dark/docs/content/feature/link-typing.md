+++
title = "Link Typing"
description = "Explicitly indicate relationships between documents."
categories = ["navigation"]
tags = ["links", "accessibility", "taxonomy", "metadata"]
features = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark uses link typing to indicate semantic relationships between documents. By default the `alternate` link type is used to highlight the presence of web feeds on the homepage and in taxonomy listings:

```html
<link href="https://domain.example/index.xml" rel="alternate" type="application/rss+xml" title="After Dark">
<link href="https://domain.example/categories/privacy/index.xml" rel="alternate" type="application/rss+xml" title="After Dark">
<link href="https://domain.example/tags/color/index.xml" rel="alternate" type="application/rss+xml" title="After Dark">
```

In addition to defaults After Dark recognizes the `prev` and `next` link types if specified in page {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}}:

```toml
prev = "/series/learn-to-code/part-one/"
next = "/series/learn-to-code/part-three/"
```

Use `prev` and `next` link types for segmented articles, {{< external "https://schema.org/LiveBlogPosting" "Live Blog Postings" />}} or to mimic the traits of a `series` taxonomy if no series taxonomy is present.

Link Types are commonly shown at the top of the page in text browsers such as {{< external href="http://elinks.or.cz" text="ELinks" />}} as an auxiliary form of navigation and can help robots and users better understand relationships between your content.

Learn more about {{< external href="http://devdocs.io/html/link_types" text="link types" />}} and {{< external href="https://gohugo.io/content-management/taxonomies" text="Taxonomies in Hugo" />}}.
