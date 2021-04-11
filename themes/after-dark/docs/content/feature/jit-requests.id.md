+++
title = "JIT Requests"
description = "Memaksimalkan sumber daya sambil meminimalkan permintaan eksternal."
categories = ["experience"]
tags = ["performance", "styles", "javascript"]
feature = ["related content", "snippets", "code highlighter"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark membuat permintaan <abbr title="Just-In-Time">JIT</abbr> untuk beberapa aset eksternal untuk mengurangi konsumsi sumber daya dan meningkatkan kinerja halaman.

Ambil [Code Highlighter](../code-highlighter) stylesheet sebagai contoh:

{{< highlight css >}}
{{< include "themes/after-dark/static/css/syntax.css" >}}
{{< /highlight >}}

Kode stylesheet yang ditunjukkan diatas itu sendiri disorot menggunakan permintaan JIT. Konfirmasikan dengan melihat permintaan jaringan untuk halaman ini dan amati permintaan`fetch` untuk file `syntax.css` seperti yang digambarkan sebagai berikut:

```sh
jit-requests (document)
├── lazysizes.min.js (fetch)
├── syntax.css (fetch)
```

Menggunakan [Fetch Injection](../fetch-injection) permintaan JIT dikeluarkan untuk mulai mengunduh sorotan stylesheet dengan cepat secara pararel dengan sumber daya lain, dan tata letak dasar berhati-hati untuk memastikan CSS hanya diminta pada halaman yang membutuhkan itu.

Buatlah permintaan JIT anda sendiri menggunakan [Custom Layout](../custom-layouts) dan [Fetch Injection](../fetch-injection).
