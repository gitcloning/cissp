+++
title = "Snippets"
description = "Bagikan kode antara Shortcodes and Templat Kustom."
categories = ["customizing"]
tags = ["shortcodes", "templating", "layout"]
feature = ["related content", "code highlighter", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Snippets adalah abstraksi templat yang memungkinkan anda menggunakan kembali markup dan logika yang sama dengan yang digunakan untuk membuat [Shortcodes](/shortcode) di [Custom Layouts](../custom-layouts) anda.

Ambil contoh yang termasuk [Button Group](/shortcode/button-group) kode pendek yang digunakan untuk membuat satu set tombol gaya, yang akan kita lihat secara rinci disini.

Pertama, Parsial:

{{< highlight go-html-template >}}
{{< include "themes/after-dark/layouts/partials/components/buttongroup.html" >}}
{{< /highlight >}}

Kemudian shortcode:

{{< highlight go-html-template >}}
{{< include "themes/after-dark/layouts/shortcodes/hackcss-buttongroup.html" >}}
{{< /highlight >}}

Perhatikan bagaimana shortcode hanya berfungsi untuk mengumpulkan input dan memanggil parsial, yang berisi semua markup dan logika tambahan. Pelimpahan tanggungjawab ini adalah abstraksi yang memungkinkan penggunaan kembali antara konten dan templat.

Sekarang mari kita lihat bagaimana cara menggunakannya.

Gunakan [Button Group](/shortcode/button-group) shortcode ke tombol grup dalam konten:

```html
{{</* hackcss-buttongroup >}}
  {{< hackcss-button text="Left" />}}
  {{< hackcss-button text="Middle" type="info" />}}
  {{< hackcss-button text="Right" isghost="true" />}}
{{< /hackcss-buttongroup */>}}
```

Yang membuat grup tombol gaya dengan tiga tombol seperti yang dtunjukkan disini:

{{< hackcss-buttongroup >}}
  {{< hackcss-button text="Left" />}}
  {{< hackcss-button text="Middle" type="info" />}}
  {{< hackcss-button text="Right" isghost="true" />}}
{{< /hackcss-buttongroup >}}

Untuk menggunakan kembali di mirror layout panggilan parsial yang digunakan di dalam shortcode.

Seluruh [Shortcodes](/shortcode) mengimplementasikan {{< external href="https://hackcss.egoist.moe" text="hackcss" />}} komponen dibangun menggunakan abstraksi templat snippets yang memungkinkan masing-masing digunakan kembali [Custom Layouts](../custom-layouts).
