+++
title = "Last Modified"
description = "Membantu pengunjung memahami kapan postingan terakhir diubah."
categories = ["experience"]
tags = ["publishing", "expired", "future", "posts", "date", "time"]
feature = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Menunjukkan postingan dengan perubahan substantif atau cukup dengan gambar sebelumnya, postingan yang lebih relevan semakin dekat ke bagian atas daftar postingan yang terakhir dimodifikasi.

Modifikasi akan dibuat jelas bagi pengunjung dengan info yang terlihat di rangkuman postingan dan tanggal publikasi asli akan tetap utuh di dalam postingan bylines .

Untuk robot, melakukan perubahan ini akan secara otomatis memperbarui Skema Data Terstruktur, umpan RSS dan pengaturan`lastmod` {{< external href="https://gohugo.io/templates/sitemap-template/" text="Sitemap" />}} anda.

Sesuaikan yang terakhir diubah dengan menambahkan `publishdate` ke postingan {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}} dan memperbarui `date` ke tanggal dan waktu yang ingin anda tampilkan untuk modifikasi.

Anda bisa spesifik dan menggunakan tanggal dan waktu (dengan mengimbangi zona waktu) seperti:

```toml
date = "2017-02-02T01:20:56-06:00"
publishdate = "2016-11-21T10:32:33+08:00"
```

Atau kurang spesifik dan hanya menggunakan tanggal:

```toml
date = "2017-02-02"
publishdate = "2016-11-21"
```

Juga memungkinkan untuk tanggal yang akan datang dan yang sudah berlalu untuk konten di Hugo. Untuk mempelajari lebih lanjut,lihat dokumentasi di {{< external href="https://gohugo.io/getting-started/usage/#draft-future-and-expired-content" text="Draft, Future, and Expired Content" />}}.
