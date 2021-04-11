+++
title = "Social Meta"
description = "Membagikan tautan dengan gambar di Facebook dan Twitter."
categories = ["social"]
tags = ["author", "metadata", "images"]
feature = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark menyediakan {{< external text="Open Graph Protocol" href="http://opengraphprotocol.org" />}} dan {{< external href="https://developer.twitter.com/en/docs/tweets/optimize-with-cards" text="Twitter Cards" />}} metadata di halaman untuk mencapai kartu berbagi yang banyak:

![Open Graph sharing card screenshot](/images/instant-view-fs8.png "Contoh kartu berbagi Open Graph yang dihasilkan oleh by After Dark")

Menyesuaikan`author` di {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}} untuk menentukan nama yang ditampilkan, jika ada:

```toml
[params]
  author = "Bali Bebas!"
```

Setel atau ganti`author` per halaman menggunakan {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}} seperti yang ditunjukkan disini:

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

Sesuaikan `images` untuk menentukan gambar eksternal atau jika menggunakan {{< external href="https://gohugo.io/content-management/page-bundles/" text="Page Bundles" />}}, tentukan jalur relatif ke sumber gambar untuk digunakan:

```toml
images = [
  "/post/post-title/images/lana-abie-581813-unsplash.jpg"
]
```

{{% hackcss-alert type="info" %}}**Kenapa menggunakan susunan?** Open Graph mendukung berbagai ukuran gambar. Dan meskipun After Dark tidak mendukung berbagai ukuran, pengguna dapat membuat [custom layouts](../custom-layouts) itu.{{% /hackcss-alert %}}

Jika tidak ada gambar tingkat halaman yang disediakan After Dark akan mundur ke gambar site-wide yang dapat disesuaikan atau dihapus dari {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}}:

```toml
[params]
  images = [
    "https://source.unsplash.com/-09QE4q0ezw/2000x1322" # site-wide og:image
  ]
```

Lihat {{< external href="https://unsplash.com/" text="Unsplash" />}} dan {{< external href="https://source.unsplash.com/" text="Unsplash Source" />}} untuk ribuan gambar bebas royalti.
