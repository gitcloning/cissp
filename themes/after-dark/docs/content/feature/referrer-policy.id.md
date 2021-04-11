+++
title = "Referrer Policy"
description = "Menentukan berapa banyak info yang diteruskan ke tautan eksternal."
categories = ["security"]
tags = ["privacy", "security", "SEO", "metadata"]
feature = ["related content", "code highlighter", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark menambahkan {{< external href="https://w3c.github.io/webappsec-referrer-policy/" text="Referrer Policy" />}} untuk meningkatkan keamanan situs dan meningkatkan privasi pengunjung di luar browser standar menggunakan kebijakan seluruh situs sederhana.

Sesuaikan site-wide default`same-origin` dari {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}}:

```toml
[params.seo]
  referrer = "same-origin"
```

Melonggarkan kebijakan keamanan dengan:

- Menyesuaikan standar seluruh situs;
- Menggunakan atribut `referrerpolicy` dari [External Shortcode](/shortcode/external);
- Menggunakan {{< external href="https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-delivery-nested" text="nested browsing context" />}} untuk menyesuaikan secara kontekstual.

Lihat {{< external href="https://w3c.github.io/webappsec-referrer-policy/" text="Referrer Policy on W3C" />}} untuk daftar nilai yang memungkinkan.
