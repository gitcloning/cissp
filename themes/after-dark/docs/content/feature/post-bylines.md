+++
title = "Post Bylines"
description = "Create human and machine readable bylines in posts."
categories = ["experience"]
tags = ["author", "posts", "taxonomy", "publishing"]
features = ["related content", "code highlighter"]
notes = [
  "update 'taxonomy pages' post byline example if modified"
]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark creates rich post bylines automatically. Bylines include optional author name, word count, links to [Taxonomy Pages](../taxonomy-pages) and [Structured Data](../structured-data).

{{% hackcss-card header="Example Byline" %}}
Published [by `author`] [`publishdate` or `date`] in [navigation](/categories/navigation) and tagged [links](/tags/links) and [taxonomy](/tags/taxonomy) using [`wordcount`] words.
{{% /hackcss-card %}}

If `author` is specified in {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}} params or post {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}} it will be included automatically in the byline attributing the author:

```toml
[params]
  author = "Billy Joe Jim Bob" # the guy behind the guy behind the guy
```

Adjust `hide_author` in {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}} to suppress attribution site-wide:

```toml
[params]
  author = "" # optional setting, not required in config
  hide_author = true # hides author name and related structured data
```

Combine with `categories` and [Last Modified](../last-modified) to produce unique [Structured Data](../structured-data).
