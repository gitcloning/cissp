+++
title = "Table of Contents"
description = "Menemukan informasi dengan cepat di postingan yang lebih panjang."
categories = ["navigation"]
tags = ["metadata"]
feature = ["related content", "snippets", "code highlighter"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Secara otomatis menghasilkan daftar isi dengan tautan gulir halus berdasarkan {{< external href="https://gsnedders.html5.org/outliner/" text="page outline" />}} saat ini. Untuk melakukannya tambahkan yang berikut ini ke postingan {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}}:

```toml
toc = true
```

Atur `false`, atau cukup hapus pengaturan untuk menonaktifkan.

Daftar isi akan jatuh di bawah penyingkapan pada pemuatan halaman. Setelah penyingkapan diperluas, outline halaman penuh akan tersingkap. Memilih item dalam outline akan menggulir halus ke bagian yang sesuai, memperbarui riwayat browser dan menyorot judul bagian.
