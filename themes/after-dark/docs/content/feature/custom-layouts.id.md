+++
title = "Custom Layouts"
description = "Menyesuaikan tata letak tanpa memodifikasi sumber tema."
categories = ["customizing"]
tags = ["layout", "templating", "style"]
feature = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark menggunakan blok template untuk memfasilitasi pembuatan tata letak halaman yang unik di mana saja di dalam situs anda. Gunakan itu untuk menambah [Snippets](../snippets) ke setiap bagian halaman, secara selektif [Custom Styles](../custom-styles) atau tambahkan kira-kira satu bagian ke beranda.

## Bagaimana cara kerjanya

Berikan 'block' berikut ini dengan nilai standart pilihan:

```go-html-template
<title>{{ block "title" }}Judul Situs{{ end }}</title>
```

Templates warisan dapat menghilangkan blok dan mempertahankan nilai standart atau menerangkan block untuk mengubah nilainya, seperti yang ditunjukan berikut ini:

```go-html-template
{{ define "title" }}Judul Halaman | Site Title{{ end }}
```

Digabungkan dengan {{< external href="https://gohugo.io/templates/lookup-order/" text="Lookup Order in Hugo" />}} block menjadi penting dalam menunjuk bagian dalam yang dapat diedit, dan meningkatkan penggunaan kembali file templates yang sudah ada.

## Diterapkan dalam konteks

Inilah template yang digunakan untuk menampilkan sebuah halaman di After Dark:

{{< highlight go-html-template >}}
{{< include "themes/after-dark/layouts/_default/single.html" >}}
{{< /highlight >}}

Tidak banyak tentang itu. Sebagian besar kode diwarisi dari template lain, memberikan gambaran yang jelas tentang struktur halaman dan membuat modifikasi yang sepele.

## Membuat milik anda sendiri

Bayangkan anda membuat bagian Buku Audio untuk situs anda dan menginginkan dua layout khusus baru: yang satu untuk membuat daftar klip audio dan yang lain untuk menjelaskan.

Untuk mendapatkan hal tersebut dengan menggunakan template block, pertama buat bagian 'audiobook' dengan satu halaman untuk menggambarkan klip:

```sh
$ hugo new audiobook/the-power-of-now.md
```

Menghasilkan struktur pohon sebagai berikut:

```
├── assets
├── content
│   └── audiobook
│       └── the-power-of-now.md
├── layouts
```

Jika sudah melayani situs anda bagian dan halaman audiobooks anda akan segera muncul menggunakan standart template block. Untuk menyesuaikan dari standart, tambahkan `list.html` dan `single.html` ke a `layouts/audiobook` di situs direktori anda.

Jika file belum ada, salinlah dari tema standart:

```sh
$ mkdir -p layouts/audiobook
$ cp themes/after-dark/layouts/_default/list.html layouts/audiobook
$ cp themes/after-dark/layouts/_default/single.html layouts/audiobook
```

Menghasilkan struktur pohon`layouts` sebagai berikut:

```
├── content
├── layouts
│   └── audiobook
│       ├── list.html
│       └── single.html
├── static
```

Sesuaikan `list.html` dan `single.html` layouts dan gunakan [Custom Styles](../custom-styles) untuk mendapatkan hasil yang diinginkan. Gunakan referensi sumber daya berikut sebagai bantuan:

- {{< external "https://gohugo.io/templates/" />}} untuk fungsi templating dan logika
- {{< external "https://devdocs.io" />}} untuk HTML yang komprehensif dan CSS reference
- {{< external "https://inclusive-components.design" />}} untuk ide pola design
