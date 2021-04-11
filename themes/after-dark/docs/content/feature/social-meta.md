+++
title = "Social Meta"
description = "Share links with images on Facebook and Twitter."
categories = ["social"]
tags = ["author", "metadata", "images"]
features = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark provides {{< external text="Open Graph Protocol" href="http://opengraphprotocol.org" />}} and {{< external href="https://developer.twitter.com/en/docs/tweets/optimize-with-cards" text="Twitter Cards" />}} metadata in pages to achieve rich sharing cards on WhatsApp, Twitter, Telegram and more:

![Open Graph sharing card screenshot](/images/instant-view-fs8.png "Example Open Graph sharing card produced by After Dark")

Adjust `author` in {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}} to specify name shown, if any:

```toml
[params]
  author = "Bali Bebas!"
```

Set or override `author` per page using{{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}} as shown here:

```toml
title = "Become a Digital Nomad in Bali: The Lost Guide"
description = "Everything you need to know to become a Digital Nomad in Bali."
author = "After Dark"
date = "2017-02-02T11:57:24+08:00"
publishdate = "2017-01-28T02:31:22+08:00"
images = [
  "https://source.unsplash.com/-09QE4q0ezw/2000x1322"
]
```

Adjust `images` to specify an external image or, if using {{< external href="https://gohugo.io/content-management/page-bundles/" text="Page Bundles" />}}, specify the relative path to the image resource to use:

```toml
images = [
  "/post/post-title/images/lana-abie-581813-unsplash.jpg"
]
```

{{% hackcss-alert type="info" %}}**Why use arrays?** Open Graph supports multiple image sizes. And though After Dark doesn't support multiple sizes, users can create [custom layouts](../custom-layouts) that do.{{% /hackcss-alert %}}

If no page-level image is provided After Dark will fallback to a site-wide image which may be adjusted or removed from {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}}:

```toml
[params]
  images = [
    "https://source.unsplash.com/-09QE4q0ezw/2000x1322" # site-wide og:image
  ]
```

See {{< external href="https://unsplash.com/" text="Unsplash" />}} and {{< external href="https://source.unsplash.com/" text="Unsplash Source" />}} for thousands of royalty-free images.
