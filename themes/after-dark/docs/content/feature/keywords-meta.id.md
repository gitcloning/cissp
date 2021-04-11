+++
title = "Keywords Meta"
description = "Tambahkan detail semantik tentang isi materi pelajaran."
categories = ["search"]
tags = ["metadata", "robots", "SEO"]
feature = ["code highlighter", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Kata kunci menawarkan penjelasan kepada robot mengenai masalah pada konten anda. After Dark menghasilkan kata kunci secara otomatis untuk halaman yang diberikan tag taksonomi untuk halaman itu, dan untuk halaman lain menggunakan taksonomi kategori situs.

Sesuaikan frase kunci dari {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}} menggunakan `keywords` array seperti:

```toml
keywords = [
  "web development",
  "digital marketing",
  "social media",
  "link building"
]
```

Meskipun dianggap tidak relevan untuk mencari peringkat, kata kunci dapat menjadi cara yang berguna untuk mendokumentasikan istilah pencarian target dan frase kunci yang digunakan dalam <abbr title="Bayar Per Klik">PPC</abbr> kampanye.
