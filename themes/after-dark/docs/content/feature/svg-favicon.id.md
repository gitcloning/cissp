+++
title = "SVG Favicon"
description = "Hiasi situs anda dengan favicon SVG yang unik."
categories = ["customizing"]
tags = ["color", "style", "graphics", "branding"]
feature = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark dikirimkan dengan 169B yang dioptimalkan[^1] SVG favicon tertanam di setiap halaman:

<details>
<summary>Perluas untuk melihat kode</summary>
{{< highlight html >}}
{{< include "themes/after-dark/layouts/partials/head/favicon.html" >}}
{{< /highlight >}}
</details>

{{% hackcss-alert type="info" %}}**Catatan**: HTML (Go) Komentar template yang dilucuti selama generasi situs.{{% /hackcss-alert %}}

Favicon adalah segitiga miring berwarna hitam dalam bentuk tepee seperti yang ditunjukkan[^2] di [Bantuan Online](../online-help) [Overview](/). Pusat segitiga menggunakan ruang negatif untuk memberikan ilusi segitiga sama sisi kedua dalam bentuk piramida, atau api terbuka, yang terkandung di dalam.

Warna ikon dapat dimodifikasi dengan mengubah atribut `fill`:

<style>
.hack figure {
  text-align: center;
  margin-top: 2rem;
}
</style>
{{< hackcss-grid class="-around" >}}
  {{< hackcss-cell class="-2of12" >}}
    <figure>
      <img src="data:image/svg+xml,%3Csvg%20viewBox='0%200%2046%2045'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EAfter%20Dark%3C/title%3E%3Cpath%20d='M.708%2045L23%20.416%2045.292%2045H.708zM35%2038L23%2019%2011%2038h24z'%20fill='%23f00'/%3E%3C/svg%3E" width="96">
      <figcaption class="highlight">
        <pre class="chroma"><code class="language-toml" data-lang="toml"><span class="nx">fill</span><span class="p">=</span><span class="s1">&quot;%23f00&quot;</span></code></pre>
      </figcaption>
    </figure>
  {{< /hackcss-cell >}}
  {{< hackcss-cell class="-2of12" >}}
    <figure>
      <img src="data:image/svg+xml,%3Csvg%20viewBox='0%200%2046%2045'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EAfter%20Dark%3C/title%3E%3Cpath%20d='M.708%2045L23%20.416%2045.292%2045H.708zM35%2038L23%2019%2011%2038h24z'%20fill='lime'/%3E%3C/svg%3E" width="96">
      <figcaption class="highlight">
        <pre class="chroma"><code class="language-toml" data-lang="toml"><span class="nx">fill</span><span class="p">=</span><span class="s1">&quot;lime&quot;</span></code></pre>
      </figcaption>
    </figure>
  {{< /hackcss-cell >}}
  {{< hackcss-cell class="-2of12" >}}
    <figure>
      <img src="data:image/svg+xml,%3Csvg%20viewBox='0%200%2046%2045'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EAfter%20Dark%3C/title%3E%3Cpath%20d='M.708%2045L23%20.416%2045.292%2045H.708zM35%2038L23%2019%2011%2038h24z'%20fill='%2300f'/%3E%3C/svg%3E" width="96">
      <figcaption class="highlight">
        <pre class="chroma"><code class="language-toml" data-lang="toml"><span class="nx">fill</span><span class="p">=</span><span class="s1">&quot;%2300f&quot;</span></code></pre>
      </figcaption>
    </figure>
  {{< /hackcss-cell >}}
{{< /hackcss-grid >}}

Sesuaikan dari`favicon.html` di direktori situs `layouts/partials/head`:

```
├── content
├── layouts
│   └── partials
│       └── head
│           └── favicon.html
├── static
```

Jika file belum ada, salin darii tema default:

```sh
$ mkdir -p layouts/partials/head
$ cp themes/after-dark/layouts/partials/head/favicon.html layouts/partials/head
```

Ganti SVG dengan grafik lain jika diinginkan:

```html
<link rel="icon" sizes="128x128" href="/favicon.png">
```

Jika mengoptimalkan pengalaman platform lakukan dari dalam `favicon.html`:

{{< highlight go-html-template "linenos=inline" >}}
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="{{ .Site.Title }}">
<link rel="apple-touch-icon" href="data:image/png;base64,{{ readFile "static/icon.png" | base64Encode }}">
{{< /highlight >}}

Lihat {{< external href="https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/extend.md#web-apps" text="H5BP Extend" />}} untuk persyaratan khusus platform dan {{< external href="https://gohugo.io/documentation/" text="Hugo Documentation" />}} untuk bantuan dengan templating fungsi dan variabel.

[^1]: Lihat [Mengoptimalkan SVGs dalam data URIs](https://codepen.io/tigt/post/optimizing-svgs-in-data-uris) untuk membantu mengoptimalkan SVGs anda sendiri.
[^2]: Pelajari cara mendaftar [animasi SVG dengan SMIL](https://devdocs.io/svg/svg_animation_with_smil).
