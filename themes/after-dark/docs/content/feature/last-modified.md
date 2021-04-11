+++
title = "Last Modified"
description = "Help visitors understand when posts were last modified."
categories = ["experience"]
tags = ["publishing", "expired", "future", "posts", "date", "time"]
features = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Denote posts with substantive changes or simply draw older, more relevant posts closer to the top of the listings with last modified.

Modifications will be made obvious to visitors with a visible callout in post summaries and the original publish date will be kept intact in the [Post Bylines](../post-bylines).

For robots, making this change will automatically update Schema Structured Data, RSS feeds and the `lastmod` setting in your {{< external href="https://gohugo.io/templates/sitemap-template/" text="Sitemap" />}}.

Adjust last modified by adding a `publishdate` to post {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}} and updating the `date` to the date and time you would like to show for the modification.

You can be specific and use a datetime (with timezone offset) like:

```toml
date = "2017-02-02T01:20:56-06:00"
publishdate = "2016-11-21T10:32:33+08:00"
```

Or less specific and use just the dates:

```toml
date = "2017-02-02"
publishdate = "2016-11-21"
```

It's also possible to set future and expiry dates for content in Hugo. To learn more see the documentation on {{< external href="https://gohugo.io/getting-started/usage/#draft-future-and-expired-content" text="Draft, Future, and Expired Content" />}}.
