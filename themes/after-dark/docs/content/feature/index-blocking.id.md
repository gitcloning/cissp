+++
title = "Index Blocking"
description = "Menentukan halaman untuk mencegahnya muncul dalam pencarian."
categories = ["search"]
tags = ["links", "search", "robots", "metadata"]
feature = ["code highlighter", "related content", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark menggunakan `noindex` robots meta arahan untuk mencegah mesin pencari merayap dan mengindeks bagian-bagian tertentu dari situs anda. Itu muncul di dokumen HTML `head` dan terlihat seperti berikut ini:

```html
<meta name="robots" content="noindex">
```

Tidak seperti {{< external href="http://www.robotstxt.org" text="robots.txt" />}} meta arahan diterangkan dalam konten halaman itu sendiri dan dengan jelas menunjuk yang mana, jika ada, halaman harus diblokir dari pengindeksan bahkan jika beberapa halaman tersebut muncul di situs anda {{< external href="https://gohugo.io/templates/sitemap-template/" text="Sitemap" />}}.

Untuk memfasilitasi penemuan halaman indeks yang diblokir [Fuzzy Search](../fuzzy-search) menggunakan meta arahan yang sama yang terbuka ke mesin pencari untuk mencegah penyingkapan halaman dalam daftar hasil itu sendiri. Oleh karena itu jika sebuah halaman dapat ditemukan di fuzzy search, pada akhirnya halaman itu dapat muncul pada halaman hasil mesin pencari.

Sesuaikan pemblokiran indeks per-halaman menggunakan `noindex` {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}}:

```toml
noindex = true # set false atau hapus untuk mmebuka blokir
```

Blok semua bagian menggunakan file`_index.md` dengan pengaturan seperti diatas:

```
├── content
│   ├── legal
│   │   ├── _index.md
│   │   ├── terms.md
│   │   └── privacy.md
│   ├── post
```

Secara standart jenis halaman seperti berikut diblokir secara otomatis:

- Daftar bagian secara otomatis ditautkan dari [Menu Bagian](../section-menu);
- [Halaman Taksonomi](../taxonomy-pages) seperti `Category`, `Tag` dan daftar istilah; dan,
- Jika diaktifkan, halaman [Fuzzy Search](../fuzzy-search) atau beberapa hasil yang terkait erat di dalam.

Sesuaikan defaults menggunakan pengaturan `noindex_kinds` dari {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}}. Sebagai contoh, untuk mengaktifkan perayapan dari bagian halaman tambahkan hal berikut ini ke konfigurasi :

```toml
[params]
  noindex_kinds = [
    "taxonomy",
    "taxonomyTerm"
  ] # crawl "section" pages
```

Pelajari tentang {{< external href="https://moz.com/learn/seo/robots-meta-directives" text="Robots Meta Directives on Moz" />}} dan lihatlah bagaimana Google menggunakan `noindex` di {{< external href="https://support.google.com/webmasters/answer/93710" text="Block search indexing with 'noindex'" />}}.
