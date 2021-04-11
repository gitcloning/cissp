+++
title = "Upgrade Script"
description = "Memeriksa pembaruan After Dark dan mengupgrade dengan mudah."
categories = ["core"]
tags = ["updating", "installation", "scripts"]
feature = ["code highlighter", "related content", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Untuk memeriksa pembaruan dan secara otomatis megupgrade After Dark ke versi terbaru, jalankan upgrade skrip dari direktori situs anda:

```sh
cd flying toasters && \
./themes/after-dark/bin/upgrade
```

Jika anda sudah menggunakan versi terbaru, skrip akan memberitahu anda:

{{< hackcss-alert type="info" >}}
<samp class="muted">Did not upgrade after-dark. Already using latest version.</samp>
{{< /hackcss-alert >}}

Jika pembaruan tersedia, skrip akan mengunduh dan menginstalnya secara otomatis:

{{< hackcss-alert type="info" >}}
<samp class="muted">Starting upgrade from 6.7.6 to 6.8.0 ...<br>
Version 6.8.0 downloaded to themes/after-dark<br>
Stopping help server if running ...</br>
Generating help documentation ...<br>
Upgrade complete! Please see CHANGELOG.md for changes.</samp>
{{< /hackcss-alert >}}

Jika versi saat ini tidak dapat dideteksi skrip akan meminta anda:

{{< hackcss-alert type="info" >}}
<samp class="muted">Cannot detect version. Upgrade after-dark anyway (y/n)? y<br>
Starting upgrade from unknown version to 6.12.1 ...<br>
Version 6.12.1 downloaded to themes/after-dark<br>
Stopping help server if running ...</br>
Generating help documentation ...<br>
Upgrade complete! Please see CHANGELOG.md for changes.</samp>
{{< /hackcss-alert >}}

Seperti [Quick Install](../quick-install) Skrip upgrade ditulis ke standar PSOIX tidak akan memerlukan ketergantungan tambahan untuk beroperasi di sebagian besar sistem. Setelah upgrade [Release Hash](../release-hashes) akan memperbarui juga sehingga anda akan [Validate Release](/validate).
