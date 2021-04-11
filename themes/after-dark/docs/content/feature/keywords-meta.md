+++
title = "Keywords Meta"
description = "Add semantic detail regarding content subject matter."
categories = ["search"]
tags = ["metadata", "robots", "SEO"]
features = ["code highlighter", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Keywords offer detail to robots regarding the subject matter of your content. After Dark generates keywords automatically for pages given the tags taxonomy for that page, and for other pages using the site's categories taxonomy.

Adjust key phrases from {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}} using a `keywords` array like so:

```toml
keywords = [
  "web development",
  "digital marketing",
  "social media",
  "link building"
]
```

While not considered relevant to search rankings, keywords can be a useful way to document target search terms and key phrases used in <abbr title="Pay Per Click">PPC</abbr> campaigns.
