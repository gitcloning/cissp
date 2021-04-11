+++
title = "Fuzzy Search"
description = "Secara cepat menemukan konten yang telah di indeks dimanapun pada situs anda."
categories = ["navigation"]
tags = ["links", "search", "controls"]
feature = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Jika mesin pencari dapat menemukannya, anda pun juga bisa. Temukan lokasi konten yang dapat diindeks dengan cepat menggunakan fuzzy search. Tidak memerlukan pendaftaran.

{{< hackcss-card header="Interactive Example" >}}
  <iframe scrolling="no" title="Error Page Example" width="100%" height="300" src="/search/?s=uzzy%20searvh"></iframe>
{{< /hackcss-card >}}

Sesuaikan dari `_index.md` di situs `content/search` direktori:

```
├── archetypes
├── content
│   └── search
│       └── _index.md
├── static
├── themes
```

Jika file belum ada, buatlah:

```sh
$ hugo new search/_index.md
```

Dan tentukan`JSON` {{< external href="https://gohugo.io/templates/output-formats" text="Output Format" />}} di dalam situs konfigurasi:

```toml
[outputs]
  home = ["HTML", "RSS", "JSON"]
```

{{% hackcss-alert type="info" %}}**Note:** ini menambahkan `JSON` sambil menyimpan `HTML` dan `RSS` secara standart.{{% /hackcss-alert %}}

Setelah diaktifkan, situs anda akan mulai menghasilkan file `index.json` selama pembuatan, memberikan fuzzy search data yang dibutuhkan untuk membantu anda menemukan halaman.

Cobalah dengan menavigasi [domain.example/search](/search), memasukkan permintaan pencarian dan dengan menggunakan <kbd>Tab</kbd> untuk menavigasi diantara hasil pencarian.
