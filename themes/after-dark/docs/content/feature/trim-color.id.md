+++
title = "Trim Color"
description = "Menentukan warna yang digunakan untuk menampilkan batas di sekitar situs anda."
categories = ["customizing"]
tags = ["color", "style", "branding"]
feature = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Trim color terkadang dapat mempengaruhi cara browser atau OS memilih untuk menampilkan batas dan aksen warna untuk situs anda. Didalam {{< external href="https://brave.com/" text="Brave" />}}, misalnya, menyesuaikan trim color mempengaruhi gaya bilah lokasi. Atur trim colors untuk menyesuaikan hal ini.

Trim color standar secara otomatis diatur ke warna latar belakang dari yang saat ini dipilih [Skin Style](../skin-styles). Mengganti default di [Custom Styles](../custom-styles) anda dengan mendeklarasikan variabel `--trim-color` di dalam pemilih `:root` di bagian atas file:

{{< highlight css "linenos=inline" >}}
:root {
  --trim-color: firebrick;
}
{{< /highlight >}}

Gunakan kembali variabel untuk mempertahankan konsistensi di seluruh gaya kustom anda:

{{< highlight css "linenos=inline,linenostart=4" >}}
nav a.active {
  background-color: var(--trim-color);
}
{{< /highlight >}}

Lihat {{< external href="https://devdocs.io/css/using_css_variables" text="Using CSS variables" />}} untuk bantuan menggunakan variabel CSS.
