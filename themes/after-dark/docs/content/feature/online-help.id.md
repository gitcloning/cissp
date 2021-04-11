+++
title = "Online Help"
description = "Panduan bantuan self-hosted lengkap dan contoh website."
categories = ["core"]
tags = ["scripts", "security", "networking"]
feature = ["related content", "code highlighter", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark termasuk bantuan online manual yang luas dan contoh website.

Melihat bantuan Dokumen lokal dengan menavigasi ke http://localhost:1414 mengikuti [Quick Install](../quick-install) atau setelah menjalankan [Upgrade Script](../upgrade-script). Tidak memerlukan koneksi internet.

Jika bantuan tidak berjalan, anda dapat memulainya kapan saja melalui skrip:

{{< hackcss-alert >}}
{{< highlight sh >}}
cd flying-toasters && \
./themes/after-dark/bin/help
{{< /highlight >}}
{{< /hackcss-alert >}}

Atau cukup membuat alias dan sajikan dokumen dengan live-reload:

{{< hackcss-alert >}}
{{< highlight sh >}}
alias hs='hugo serve --navigateToChanged' && \
hs --port 1414 --source themes/after-dark/docs
{{< /highlight >}}
{{< /hackcss-alert >}}

Bantuan termasuk dalam kode sumber After Dark. Jadi setiap rilis baru akan menyertakan dokumen bantuan terbaru, khusus untuk versi tertentu.

Upgradelah untuk mendapatkan update terbaru menggunakan [Upgrade Script](../upgrade-script/).
