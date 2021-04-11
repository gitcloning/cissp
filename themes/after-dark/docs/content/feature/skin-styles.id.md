+++
title = "Skin Styles"
description = "Pilih satu dari delapan skin style yang dapat disesuaikan."
categories = ["customizing"]
tags = ["color", "style", "branding"]
feature = ["code highlighter", "snippets", "related content"]
alias = [
  "/feature/display-variants/"
]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark menggunakan {{< external href="https://hackcss.egoist.moe" text="hackcss" />}} untuk menyediakan empat palet warna dan dua mode tampilan. Beralih diantara mereka dari {{< external href="https://gohugo.io/getting-started/configuration/" text="site configuration" />}} anda untuk 8 kemungkinan kombinasi:

<style>
  table[summary] td pre {
    margin: 0;
  }
  .hack.dark table tr:nth-child(odd) td {
    background-color: initial;
  }
</style>
<table summary="Display Variations">
  <thead>
    <tr>
      <th rowspan="2">Palette</th>
      <th colspan="2">Mode</th>
    </tr>
    <tr>
      <th>Hack</th>
      <th>Standard</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dark</td>
      <td><i>None required.</i></td>
      <td class="highlight">
        <pre><code><span class="p">[</span><span class="nx">params</span><span class="p">.</span><span class="nx">hackcss</span><span class="p">]</span>
  <span class="nx">mode</span> <span class="p">=</span> <span class="s2">&quot;standard&quot;</span></code></pre>
      </td>
    </tr>
    <tr>
      <td style="background-color:#181818;color:#ccc">Dark Grey</td>
      <td class="highlight">
        <pre><code><span class="p">[</span><span class="nx">params</span><span class="p">.</span><span class="nx">hackcss</span><span class="p">]</span>
  <span class="nx">palette</span> <span class="p">=</span> <span class="s2">&quot;dark-grey&quot;</span></code></pre>
      </td>
      <td class="highlight">
        <pre><code><span class="p">[</span><span class="nx">params</span><span class="p">.</span><span class="nx">hackcss</span><span class="p">]</span>
  <span class="nx">mode</span> <span class="p">=</span> <span class="s2">&quot;standard&quot;</span>
  <span class="nx">palette</span> <span class="p">=</span> <span class="s2">&quot;dark-grey&quot;</span></code></pre>
      </td>
    </tr>
    <tr>
      <td style="background-color:#073642;color:#78909c">Solarized Dark</td>
      <td class="highlight">
        <pre><code><span class="p">[</span><span class="nx">params</span><span class="p">.</span><span class="nx">hackcss</span><span class="p">]</span>
  <span class="nx">palette</span> <span class="p">=</span> <span class="s2">&quot;solarized-dark&quot;</span></code></pre>
      </td>
      <td class="highlight">
        <pre><code><span class="p">[</span><span class="nx">params</span><span class="p">.</span><span class="nx">hackcss</span><span class="p">]</span>
  <span class="nx">mode</span> <span class="p">=</span> <span class="s2">&quot;standard&quot;</span>
  <span class="nx">palette</span> <span class="p">=</span> <span class="s2">&quot;solarized-dark&quot;</span></code></pre>
      </td>
    </tr>
    <tr>
      <td style="background-color:#fff;color:#000">Light</td>
      <td class="highlight">
        <pre><code><span class="p">[</span><span class="nx">params</span><span class="p">.</span><span class="nx">hackcss</span><span class="p">]</span>
  <span class="nx">palette</span> <span class="p">=</span> <span class="s2">&quot;light&quot;</span></code></pre>
      </td>
      <td class="highlight">
        <pre><code><span class="p">[</span><span class="nx">params</span><span class="p">.</span><span class="nx">hackcss</span><span class="p">]</span>
  <span class="nx">mode</span> <span class="p">=</span> <span class="s2">&quot;standard&quot;</span>
  <span class="nx">palette</span> <span class="p">=</span> <span class="s2">&quot;light&quot;</span></code></pre>
      </td>
    </tr>
  </tbody>
</table>

Skin default menggunakan palet warna`dark` dengan mode tampilan `hack`. Tidak diperlukan konfigurasi untuk menggunakan skin default.

Pilih skin style dari konfigurasi situs anda. Sebagai contoh , untuk mengatur warna abu-abu gelap tanpa gaya perawatan `markdown` perbarui konfigurasi anda seperti:

{{< hackcss-card header="config.toml" >}}
{{< highlight toml "linenos=inline" >}}
baseurl = "https://letterboxd.com/"
languageCode = "en-US"
title = "A Scanner Darkly"

[params]
  description = "Seorang polisi yang menyamar di masa depan yang tidak terlalu jauh terlibat dengan narkoba baru yang berbahaya dan sebagai akibatnya dia mulai kehilangan identitasnya."
  images = ["https://a.ltrbxd.com/resized/sm/upload/e3/kt/un/fi/nZuqo9yQpEo447sH0w0MFBgdT6J-1200-1200-675-675-crop-000000.jpg"]

[params.hackcss]
  mode = "standard"
  palette = "dark-grey"
{{< /highlight >}}
{{< /hackcss-card >}}

Nonaktifkan skin styles dengan mengatur bendera`disabled`:

```toml
[params.hackcss]
  disabled = true # disable skin styles entirely
```

Saat mengganti warna, tinjau [Custom Styles](../custom-styles), [Trim Color](../trim-color) dan [Error Page](../error-page), buat penyesuaian yang diperlukan untuk mencapai tampilan dan rasa yang diinginkan.
