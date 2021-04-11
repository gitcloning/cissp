+++
title = "Error Page"
description = "Berikan para pengunjung sebuah alasan agar tidak meninggalkan halaman ketika terjadi error."
categories = ["experience"]
tags = ["engagement", "retention", "branding"]
feature = ["error page", "snippets", "code highlighter", "related content", "index blocking"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark termasuk animasi {{< external rel="nofollow help" href="/404.html" text="404 Page" />}} yang dapat anda tampilkan ketika halaman lain tidak dapat ditemukan. Halaman yang error berisi latar belakang animasi dengan layar penuh dan "404" link dengan perawatan Ginsu. Mengikuti tautan untuk menavigasi ke beranda.

{{< hackcss-card header="Interactive Example" >}}
  <iframe title="Error Page Example" width="100%" height="300" src="/404.html"></iframe>
{{< /hackcss-card >}}

<!--more-->

Sesuaikan itu dari `404.html` di situs `content` direktori:

```
├── archetypes
├── content
│   ├── post
│   └── 404.html
├── layouts
```

Jika file belum ada, salinlah dari tema standart:

```sh
$ cp themes/after-dark/content/404.html content
```

Konfigurasikan server web anda untuk mengarahkan ulang ke `404.html` ketika halaman tidak dapat ditemukan untuk menggunakannya. Gabungkan dengan [Voyeur Module](/module/voyeur) untuk membantu membuat {{< external href="https://gohugo.io/content-management/urls/#aliases" text="Page Aliases" />}}.
