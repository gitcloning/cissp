+++
title = "Featured Posts"
description = "Display your favorite blog posts front-and-center."
categories = ["navigation"]
tags = ["seo", "retention", "layout", "templating", "style"]
features = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark helps you showcase your favorite blog posts by allowing you to easily specify a set of pages to appear first in post listings using only site config.

{{< hackcss-alert >}}
{{< figure
  src="/images/screenshots/feature-featured-posts-fs8.png"
>}}
{{< /hackcss-alert >}}

Use featured posts to drive more traffic to your highest value pages, increase the visibility of niche content or target pages for additional inbound links.

Adjust featured posts from {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}} by adding:

```toml
[params.layout.post.featured]
  limit = 3
  items = [
    "borg-backup-minio-scaleway",
    "dual-boot-manjaro-mojave-macbook-pro",
    "surfing-uncensorable-web",
    "encrypted-internet-wireguard-manjaro-linux"
  ]
```

Modify `items` using the {{< external "https://gohugo.io/content-management/organization#slug" "page slugs" />}} from your posts and adjust the featured `limit` to the total number of items you wish to display. Like [Custom Homepage](../custom-homepage/) and [Related Content](../related-content/) performance-optimized thumbnail images will appear automatically when a post contains a [Post Image](../post-images/) with `thumbnail` in the name.

Optionally, customize thumbnail styling using [Custom Styles](../custom-styles/):

```css
ul.thumbnail.grid li a:hover figure {
  filter: initial;
}
ul.thumbnail.grid li a figure {
  position: relative;
  line-height: 0;
  margin-bottom: 8px;
}
ul.thumbnail.grid li a:hover figure::after {
  content: "";
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(0,0,0,0.1) 0,
    rgba(0,0,0,0.3) 100%
  );
}
```
