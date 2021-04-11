+++
title = "Taxonomy Pages"
description = "Menavigasi situs menggunakan taksonomi yang ditentukan penulis."
categories = ["navigation"]
tags = ["links", "taxonomy"]
feature = ["related content", "code highlighter", "snippets"]
alias = [
  "/feature/page-taxonomies/"
]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark menghasilkan tag dan kategoris taksonomi, halaman dan tautan istilah taksonomi [Post Bylines](../post-bylines).

Berikan halaman berikut ini {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}} untuk jenis postingan:

```toml
categories = ["navigation"]
tags = ["links", "taxonomy"]
```

Tautan taksonomi berikut akan muncul di bylines:

> Diterbitkan [by `author`] [`publishdate` or `date`] di dalam [navigation](/categories/navigation) and tagged [links](/tags/links) dan [taxonomy](/tags/taxonomy) menggunakan [`wordcount`] words.

Berikut ini [Index Blocked](../index-blocking) halaman taksonomi dihasilkan:

- [/categories/index.html](/categories/index.html)
- [/categories/navigation/index.html](/categories/navigation/index.html)
- [/tags/index.html](/tags/index.html)
- [/tags/links/index.html](/tags/links/index.html)
- [/tags/taxonomy/index.html](/tags/taxonomy/index.html)

Umpan web taksonomi berikut dibuat:

- [/categories/index.xml](/categories/index.xml)
- [/categories/navigation/index.xml](/categories/navigation/index.xml)
- [/tags/index.xml](/tags/index.xml)
- [/tags/links/index.xml](/tags/links/index.xml)
- [/tags/taxonomy/index.xml](/tags/taxonomy/index.xml)

{{< external href="https://gohugo.io/templates/sitemap-template/" text="Sitemap" />}} dan [Related Content](../related-content) perbarui dan, jika diaktifkan, [Fuzzy Search](../fuzzy-search) indeks pencarian JSON (ditimbang pada taksonomi) dibuat ulang, semuanya otomatis
Lihat {{< external href="https://gohugo.io/content-management/taxonomies" text="Taxonomies in Hugo" />}} untuk mempelajari tentang taksonoomi dan cara menyesuaikannya.
