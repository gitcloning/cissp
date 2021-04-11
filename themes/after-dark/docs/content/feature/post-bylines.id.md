+++
title = "Post Bylines"
description = "Membuat byline yang dapat dibaca manusia dan mesin di postingan."
categories = ["experience"]
tags = ["author", "posts", "taxonomy", "publishing"]
feature = ["related content", "code highlighter"]
notes = [
  "perbarui contoh postingan byline'taxonomy pages'jika dimodifikasi"
]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark mwmbuat postingan byline yang sangat banyak secara otomatis. Bylines termasuk pilihan nama penuis, jumlah kata, tautan ke [Halaman Taksonomi](../taxonomy-pages) dan [Structured Data](../structured-data).

{{% hackcss-card header="Example Byline" %}}
Diterbitkan [by `author`] [`publishdate` or `date`] di [navigation](/categories/navigation) dan ditandai [links](/tags/links) dan [taxonomy](/tags/taxonomy) menggunakan [`wordcount`] kata-kata.
{{% /hackcss-card %}}

Jika `author` ditentukan di {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}} params atau posting {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}} itu akan dimasukkan secara otomatis dalam byline yang menghubungkan penulis:

```toml
[params]
  author = "Billy Joe Jim Bob" # the guy behind the guy behind the guy
```

Sesuaikan `hide_author` di {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}} untuk menekan atribusi di seluruh situs:

```toml
[params]
  author = "" # optional setting, not required in config
  hide_author = true # hides author name and related structured data
```

Gabungkan dengan`categories` dan [Last Modified](../last-modified) untuk mengahasilkan [Structured Data](../structured-data) yang unik.
