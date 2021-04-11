+++
title = "Webmaster Tools"
description = "Menguji dan mengirim situs anda dengan mesin pencari yang terkenal."
categories = ["search"]
tags = ["SEO", "robots", "metadata"]
feature = ["code highlighter", "related content", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

## Verifikasi Webmaster

Gunakan beranda`meta` untuk memverifikasi situs anda dengan Google, Bing, Alexa dan Yandex. Semua verifikasi bersifat opsional dan beberapa penyedia mengizinkan anda [submit manually](#submit-manually).

Untuk memverifikasi dengan`meta` tambahkan yang berikut ini ke {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}} dan isi nilai yang diberikan kepada anda oleh konsol webmaster mesin pencari atau sejenisnya :

```toml
[params.seo.webmaster_verifications]
  google = "" # Opsional, lihat https://search.google.com/search-console
  bing = "" # Opsional, lihat https://www.bing.com/toolbox/webmaster/
  yandex = "" # Opsional, lihat https://webmaster.yandex.com/
  alexa = "" # Opsional, mengklaim dihentikan (lihat catatan di bawah ini)
```

{{< hackcss-alert type="info" >}}
<strong>Note:</strong> Mengklaim situs anda dengan Alexa {{< external text="dihentikan" href="https://support.alexa.com/hc/en-us/articles/219135887-Claiming-has-been-retired-May-2016" />}} dalam May 2016.
{{< /hackcss-alert >}}

Nanti anda dapat menghapus verifikasi yang tidak anda perlukan lagi atau memutuskan untuk tidak menggunakannya.

### Kirim secara manual

Mengirim peta situs anda secara manual untuk pengindeksan pencarian:

{{< hackcss-form target="_blank" action="https://www.google.com/webmasters/tools/ping" >}}
  {{< hackcss-formgroup >}}
    {{< hackcss-label for="google" text="Google:" />}}
    {{< hackcss-textinput id="google" name="sitemap" placeholder="https://domain.example/sitemap.xml" >}}
  {{< /hackcss-formgroup >}}
{{< /hackcss-form >}}
{{< hackcss-form target="_blank" action="https://bing.com/webmaster/ping.aspx" >}}
  {{< hackcss-formgroup >}}
    {{< hackcss-label for="bing" text="Bing:" />}}
    {{< hackcss-textinput id="bing" name="siteMap" placeholder="https://domain.example/sitemap.xml" >}}
  {{< /hackcss-formgroup >}}
{{< /hackcss-form >}}

## Uji Data Terstruktur

Untuk menguji dengan Yandex gunakan {{< external href="https://webmaster.yandex.com/tools/microtest" text="Structured data validator" />}} alat uji. Untuk Google kirimkan formulir dibawah ini dengan URL yang ingin anda uji:

{{< hackcss-form target="_blank" action="https://search.google.com/structured-data/testing-tool" >}}
  {{< hackcss-formgroup >}}
    {{< hackcss-textinput type="hidden" name="hl" value="en" >}}
    {{< hackcss-label for="google" text="Test URL:" />}}
    {{< hackcss-textinput id="google" name="url" placeholder="https://domain.example/post/" >}}
  {{< /hackcss-formgroup >}}
{{< /hackcss-form >}}

Gunakan [Hosting Ephemeral]({{< relref "ephemeral-hosting" >}}) untuk memeriksa situs anda saat dalam pengembangan/pengujian.

## Menguji dan memantau kecepatan

Tidak ada yang menyukai website yang lambat. Mengevaluasi dan menganalisa kinerja dari berbagai lokasi di seluruh dunia menggunakan {{< external href="https://tools.pingdom.com" text="Pingdom Tools" />}} dan {{< external "https://webpagetest.org" />}} secara gratis.

Memantau kinerja dari waktu ke waktu menggunakan {{< external href="https://speedtracker.org" text="SpeedTracker" />}}.


## Layanan Tambahan

- {{< external "https://webmaster.yandex.com/tools/robotstxt/" />}}
- {{< external "https://w3c.github.io/developers/tools/" />}}
