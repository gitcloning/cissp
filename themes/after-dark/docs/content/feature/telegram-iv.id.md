+++
title = "Instant Views"
description = "Preview secara instant konten anda di Telegram."
categories = ["social"]
tags = ["author", "templating"]
features = ["related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark menyediakan panduan templat untuk mengaktifkan Telegram Instant Views untuk postingan. Gunakan itu untuk membuat {{< external href="https://instantview.telegram.org/my/" text="Instant View Template" />}} di situs telegram:

```yaml
# menggunakan 2.0
~version: "2.0"

# aktifkan untuk item di bagian postingan
?path: /post/.+

# mendefinisikan elemen-elemen yang diperlukan
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

# jika cover ada, tentukan gambar
?exists: //article/meta[@itemprop="image"]/@content
cover: //article/header/figure[@itemprop="image"]
image_url: $cover/self::img/@src

# data tanggal postingan diekstraksi secara otomatis
```

Preview hasilnya di situs Telegram :

![Telegram Instant View screenshot](/images/feature-instant-view-fs8.png "Example Telegram Instant View for After Dark")

Selain itu, jika situs anda memiliki saluran telegram, anda dapat menentukannya dengan mengatur seperti yang berikut ini di konfigurasi situs anda:

```toml
[params.seo]
  telegram_channel = "channelname" # omit the leading `@`
```

Menentukan nama saluran memungkinkan pengguna telegram untuk bergabung dengan saluran anda dengan satu klik di dalam Instant view.

Lihat {{< external href="https://instantview.telegram.org/" text="Instant View on Telegram" />}} untuk informasi tambahan.
