+++
title = "Lazy Loading"
description = "Tunda pemuatan gambar, iframe dan skrip."
categories = ["experience"]
tags = ["performance", "images", "graphics"]
feature = ["code highlighter", "related content", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark menggunakan {{< external href="https://github.com/aFarkas/lazysizes" text="lazySizes" />}} untuk memprioritaskan pemuatan sumber daya eksternal tertentu untuk meningkatkan waktu pemuatan halaman dan membantu mengurangi konsumsi bandwith secara keseluruhan.

Lazy loading bekerja secara otomatis untuk [Custom Homepage](../custom-homepage) thumbnails, [Post Images](../post-images) dan ketika menggunakan [Figure Shortcode](/shortcode/figure), atau terkait dengan [Snippet](../snippets), seperti yang terlihat sebagai berikut:

{{< figure
  src="https://source.unsplash.com/Y-w15LfHO8w/5184x3456"
  lqipsrc="https://source.unsplash.com/Y-w15LfHO8w/1080x720"
  caption="Be Creative"
  attr="AK¥N Cakiner"
  attrlink="https://unsplash.com/@akin"
>}}

Untuk menggunakan lazy loading di [Custom Layouts](../custom-layouts) atau saat membuat milik anda sendiri [Shortcodes](/shortcode) menambahkan atribut kelas `lazyload` dan `data` yang relevan seperti yang ditunjukkan di sini:

```html
<!-- non-responsive -->
<img data-src="image.jpg" class="lazyload">
```

```html
<!-- responsive with automatic sizes calculation -->
<img
  data-sizes="auto"
  data-src="image2.jpg"
  data-srcset="image1.jpg 300w, image2.jpg 600w, image3.jpg 900w"
  class="lazyload">
```

```html
<!-- iframe example -->
<iframe frameborder="0"
  class="lazyload"
  allowfullscreen
  data-src="//www.youtube.com/embed/ZfV-aYdU4uE">
</iframe>
```

Lihat {{< external href="https://github.com/aFarkas/lazysizes" text="lazySizes" />}} sebagai informasi dan contoh tambahan.
