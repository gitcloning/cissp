+++
title = "Related Content"
description = "Promote more of your content to your site's visitors."
categories = ["navigation"]
tags = ["links", "retention", "engagement", "layout", "templating", "style"]
features = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark provides related content to help users find more information that's relevant to them and can increase page views and time spent on your site.

{{< hackcss-alert >}}
{{< figure
  src="/images/screenshots/feature-related-content-fs8.png"
>}}
{{< /hackcss-alert >}}

When two or more pages or posts contain the same taxonomy `tags` they will be linked in a section as shown near the bottom of the page. The section appears automatically below [Post Bylines](../post-bylines) with a default maximum of 7 items shown.

{{% hackcss-alert type="info" %}}**Tip:** Create a [Custom Layout](/feature/custom-layouts) to show Related Content outside posts.{{% /hackcss-alert %}}

Adjust site-wide maximum from {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}} by adding `related_content_limit`:

```toml
[params]
  related_content_limit = 5 # limit to 5 items maximum site-wide
```

By default related content will appear as an unordered list of page titles with hyperlinks to their respective pages along with the approximate reading time.

For posts, display thumbnail images instead by adding a related limit:

```toml
[params.layout.post.related]
  limit = 3
```

And for each post create a [Post Images](../post-images/)-formatted resource bundle containing `thumbnail` in the name as described in more detail on [Custom Homepage](../custom-homepage/).

As with homepage thumbnails, image processing may be adjusted:

```toml
[params.layout.post.related]
  limit = 4
  thumbs = ["fill", "400x400"] # Optional, thumbnail image processing
```

Set `limit` to `0` to hide the related content section.

See {{< external href="https://gohugo.io/content-management/related/" text="Related Content in Hugo" />}} for additional configuration options.
