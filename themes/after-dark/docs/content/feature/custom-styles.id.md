+++
title = "Custom Styles"
description = "Mengubah gaya tema untuk design kontrol yang lengkap."
categories = ["customizing"]
tags = ["color", "style", "branding"]
feature = ["code highlighter", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark menggunakan {{< external href="https://gohugo.io/hugo-pipes/" text="Hugo Pipes" />}} untuk mengaktifkan kostomisasi gaya tema menggunakan CSS. Jika tidak diubah gaya khusus berikut disediakan secara standart:

{{< highlight css "linenos=inline" >}}
{{< include "themes/after-dark/assets/css/custom.css" >}}
{{< /highlight >}}

Sesuaikan dari `custom.css` di situs `assets/css` direktori:

```
├── archetypes
├── assets
│   └── css
│       └── custom.css
├── content
```

Jika file belum ada, salinlah dari tema standart:

```sh
$ mkdir -p assets/css
$ cp themes/after-dark/assets/css/custom.css assets/css
```

Kemudian buka file dan mulailah mengedit, atau menghapusnya untuk mengembalikan ke bentuk standart.

{{< hackcss-alert type="info" >}}
  <strong>Tip:</strong> Pilih dari ribuan palet warna yang telah ditetapkan {{< external "https://coolors.co/" />}}.
{{< /hackcss-alert >}}
