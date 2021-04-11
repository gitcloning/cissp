+++
title = "Related Content"
description = "Mempromosikan lebih banyak konten anda kepada pengunjung situs."
categories = ["navigation"]
tags = ["links", "retention", "engagement", "layout", "templating", "style"]
feature = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark menyediakan konten terkait untuk membantu pengguna menemukan lebih banyak informasi yang relevan bagi mereka dan dapat meningkatkan tampilan halaman dan waktu yang dihabiskan untuk situs anda.

{{< hackcss-alert >}}
{{< figure
  src="/images/screenshots/feature-related-content-fs8.png"
>}}
{{< /hackcss-alert >}}

Ketika dua halaman atau lebih atau postingan yang berisi taksonomi`tags` yang sama, mereka akan ditautkan di bagian seperti yang ditunjukkan di bagian bawah halaman. Bagian ini muncul secara otomatis seperti dibawah ini [Post Bylines](../post-bylines) dengan maksimum 7 item default yang ditampilkan.

{{% hackcss-alert type="info" %}}**Tip:** Buatlah [Custom Layout](/feature/custom-layouts) untuk menampilkan konten terkait diluar postingan.{{% /hackcss-alert %}}

Sesuaikan seluruh situs maksimum dari {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}} dengan menambah `related_content_limit`:

```toml
[params]
  related_content_limit = 5 # limit to 5 items maximum site-wide
```

Lihat {{< external href="https://gohugo.io/content-management/related/" text="Related Content in Hugo" />}} untuk pilihan konfigurasi tambahan .
