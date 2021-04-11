+++
title = "Link Typing"
description = "Menunjukkan hubungan antar dokumen secara eksplisit."
categories = ["navigation"]
tags = ["links", "accessibility", "taxonomy", "metadata"]
feature = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark menggunakan pengetikan tautan untuk menunjukkan hubungan semantik antara dokumen. Secara default tipe tautan `alternate` digunakan untuk menyorot keberadaan umpan web di beranda dan di dalam daftar taksonomi:

```html
<link href="https://domain.example/index.xml" rel="alternate" type="application/rss+xml" title="After Dark">
<link href="https://domain.example/categories/privacy/index.xml" rel="alternate" type="application/rss+xml" title="After Dark">
<link href="https://domain.example/tags/color/index.xml" rel="alternate" type="application/rss+xml" title="After Dark">
```

Sebagai tambahan ke defaults After Dark mengenali jenis tautan `prev` dan `next` jika ditentukan di halaman {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}}:

```toml
prev = "/series/learn-to-code/part-one/"
next = "/series/learn-to-code/part-three/"
```

Gunakan jenis tautan `prev` dan `next` untuk artikel tersegmentasi, {{< external "https://schema.org/LiveBlogPosting" "Live Blog Postings" />}} atau untuk meniru ciri-ciri taksonomi `series` jika tidak ada taksonomi seri.

Jenis tautan biasanya ditampilkan di bagian atas halaman di browser teks seperti {{< external href="http://elinks.or.cz" text="ELinks" />}} sebagai bentuk navigasi tambahan dan dapat membantu robot dan pengguna lebih memahami hubungan antar konten anda.

Pelajari lagi tentang {{< external href="http://devdocs.io/html/link_types" text="link types" />}} dan {{< external href="https://gohugo.io/content-management/taxonomies" text="Taxonomies in Hugo" />}}.
