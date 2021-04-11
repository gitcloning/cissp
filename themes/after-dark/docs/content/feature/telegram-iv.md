+++
title = "Instant Views"
description = "Instantly preview your content from within Telegram."
categories = ["social"]
tags = ["author", "templating"]
features = ["related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark provides a template guide to enable Telegram Instant Views for posts. Use it to create an {{< external href="https://instantview.telegram.org/my/" text="Instant View Template" />}} on the Telegram site:

```yaml
# use 2.0
~version: "2.0"

# enable for items in the post section
?path: /post/.+

# define required elements
title: //*[@itemprop="headline"]
body: //*[@itemprop="articleBody"]

# add optional site name and subtitle
subtitle: //*[@itemprop="description"][normalize-space()]
site_name: //*[@itemprop="url"][@href="/"]

# if author exists, define name and url
?exists: //*[@itemprop="author"]
author: //*[@itemprop="author"]
author_url: //*[@itemprop="url"]/@href

# add optional telegram channel
channel: //*[@name="telegram:channel"]/@content

# if cover exists, define images
?exists: //article/meta[@itemprop="image"]/@content
cover: //article/header/figure[@itemprop="image"]
image_url: $cover/self::img/@src

# post date extracted automatically
```

Preview your results on the Telegram site:

![Telegram Instant View screenshot](/images/feature-instant-view-fs8.png "Example Telegram Instant View for After Dark")

Additionally, if your site has a telegram channel, you can specify it by setting the following in your site config:

```toml
[params.seo]
  telegram_channel = "channelname" # omit the leading `@`
```

Specifying a channel name allows Telegram users to join your channel with a single click from within an Instant View.

See the {{< external href="https://instantview.telegram.org/" text="Instant View on Telegram" />}} for additional information.
