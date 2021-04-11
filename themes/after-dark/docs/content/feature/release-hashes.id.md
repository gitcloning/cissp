+++
title = "Release Hashes"
description = "Memastikan anda menggunakan perangkat After Dark yang asli."
categories = ["security"]
tags = ["validate", "privacy", "security", "cryptography", "npm", "git"]
feature = ["code highlighter", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark memanfaatkan {{< external href="https://www.npmjs.com" text="NPM" />}} CLI untuk menghasilkan hash kriptografi yang unik di setiap rilis, memungkinkan setiap salinan diidentifikasi secara unik terlepas dari sumbernya.

Lepaskan penggunaan hash dengan <abbr title="Secure Hashing Algorithm">SHA-512</abbr> algoritma dan terlihat seperti ini:

{{< hackcss-alert type="success" >}}
<samp>VWcn7AxXUkZRGsRIM/6A5RjqW7DOPH+XbnLGRp7hpr0TCH/9l31ug2h2JaIlEvsDzOPRcZDBdyZvJ4mSm/Rqjg==</samp>
{{< /hackcss-alert >}}


Setiap rilis hash baru dihasilkan di lokasi berikut:

- Tertanam menggunakan PGP di {{< external href="https://git.habd.as/comfusion/after-dark/releases" text="release source" />}} pesan`git tag`.
- Dikodifikasikan ke dalam {{< external href="https://registry.npmjs.org/after-dark/latest" text="latest" />}} atau {{< external href="https://registry.npmjs.org/after-dark/6.7.9" text="version-specific" />}} metadata paket NPM.
- Tertanam di dalam After Dark [Bantuan Online](../online-help) dokumentasi.

Setelah menerima salinan After Dark anda, anda dapat menggunakan hash rilis, untuk memverifikasi anda dapat menggunakan versi perangkat lunak yang tidak dipalsukan.

Jalankan [Release Validator](/validate) untuk memeriksa dengan cepat rilis anda secara offline:

{{< hackcss-card header="Interactive Release Validator" >}}
<iframe title="Validate Release" scrolling="no" width="100%" height="360" src="/validate"></iframe>
{{< /hackcss-card >}}

Untuk pemeriksaan yang lebih meyeluruh lakukan hal berikut ini, membandingkan hash anda dengan yang dihasilkan selama rilis seperti yang didefinisikan diatas:

1. Instal {{< external href="https://docs.npmjs.com/cli/npm" text="npm cli" />}} di perangkat anda.
2. Navigasikan ke `themes/after-dark` dari dalam situs anda.
3. Jalankan `npm run integrity` untuk menghasilkan SHA-512 hash anda.

Jika semuanya cocok, berarti anda sudah siap. Jika tidak, silahkan {{< external href="https://git.habd.as/comfusion/after-dark/issues/new" text="Submit an Issue" />}}.
