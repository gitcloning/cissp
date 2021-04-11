+++
title = "Fetch Injection"
description = "Memuat skrip dan gaya eksternal dengan kecepatan luar biasa."
categories = ["experience"]
tags = ["performance", "styles"]
feature = ["snippets", "related content", "code highlighter"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark menggunakan {{< external rel="external help" href="https://git.habd.as/jhabdas/fetch-inject" text="Fetch Inject" />}} pustaka untuk memuat dan menjalankan skrip dan gaya ekesternal lebih cepat dari yang dapat dilakukan browser.

{{< external href="https://hackcabin.com/post/managing-async-dependencies-javascript/" text="Fetch Injection" />}} terkonsep dan dikembangkan untuk After Dark agar memungkinkan tautan dalam ke ukuran penuh [Galeri Gambar](/module/hall-of-mirrors) gambar tanpa memblokir pemuatan halaman dan memilki kinerja aplikasi lainnya:

<table>
  <thead>
    <tr>
      <th rowspan="2" scope="col">Use Case</th>
      <th colspan="2" scope="col">Chrome Performance Comparison (4G simulated connection speed)</th>
    </tr>
    <tr>
      <th scope="col">Without Fetch Inject</th>
      <th scope="col">With Fetch Inject</th>
    </tr>
  </thead>
  <tbody>
    <td>{{< external href="https://habd.as/talks/screaming-fast-wordpress-redis-vultr/" text="WordPress Twenty Seventeen" />}}</td>
    <td>~3.600s</td>
    <td>~0.918s</td>
  </tbody>
</table>

Gunakan Fetch Inject di [Custom Layouts](../custom-layouts) untuk memuat skrip dan gaya asal usul silang atau dari direktori statis situs anda.

Berikan isi folder statis berikut:

```
├── layouts
├── static
│   ├── js
│   │   ├── jquery.slim.min.js
│   │   ├── tether.min.js
│   │   └── bootstrap.min.js
│   └── css
│       └── font-awesome.min.css
└── themes
```

Anda dapat memuat Bootstrap (w/Font Awesome) dan menunjukkan berapa lama itu selesai:

{{< highlight html "linenos=inline" >}}
<script>
  fetchInject([
    'https://cdn.jsdelivr.net/lodash/latest/lodash.min.js',
    'https://cdn.jsdelivr.net/momentjs/latest/moment.min.js'
  ])
  .then(() => {
    const start = moment();
    fetchInject(['/js/bootstrap.min.js'],
      fetchInject([
        '/js/jquery.slim.min.js',
        '/js/tether.min.js',
        '/css/font-awesome.min.css'
      ])
    ).then(console.log(`Bootstrap Loaded: ${_.capitalize(start.toNow())}.`));
  });
</script>
{{< /highlight >}}

Fetch Inject adalah 555 bytes terkompresi, non-blocking dan disertakan secara default pada [Custom Layouts](../custom-layouts). Kunjungi {{< external href="https://codepen.io/jhabdas/pen/MpVeOE?editors=0012" text="CodePen Playground" />}} untuk mencobanya.
