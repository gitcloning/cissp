+++
title = "Skin Styles"
description = "Choose one of eight customizable skin styles."
categories = ["customizing"]
tags = ["color", "style", "branding"]
features = ["code highlighter", "snippets", "related content"]
aliases = [
  "/feature/display-variants/"
]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark uses {{< external href="https://hackcss.egoist.moe" text="hackcss" />}} to provide four color palettes and two display modes. Toggle between them from your {{< external href="https://gohugo.io/getting-started/configuration/" text="site configuration" />}} for 8 possible combinations:

<style>
  table[summary] td pre {
    margin: 0;
  }
  .hack.dark table tr:nth-child(odd) td {
    background-color: initial;
  }
</style>
<table summary="Color palette and display mode settings">
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

The default skin uses the `dark` color palette with the `hack` display mode. No configuration is necessary to use the default skin.

Choose a skin style from your site configuration. For example, to set a dark grey color _without_ the stylistic `markdown` treatment update your config like:

{{< hackcss-card header="config.toml" >}}
{{< highlight toml "linenos=inline" >}}
baseurl = "https://letterboxd.com/"
languageCode = "en-US"
title = "A Scanner Darkly"

[params]
  description = "An undercover cop in a not-too-distant future becomes involved with a dangerous new drug and begins to lose his own identity as a result."
  images = ["https://a.ltrbxd.com/resized/sm/upload/e3/kt/un/fi/nZuqo9yQpEo447sH0w0MFBgdT6J-1200-1200-675-675-crop-000000.jpg"]

[params.hackcss]
  mode = "standard"
  palette = "dark-grey"
{{< /highlight >}}
{{< /hackcss-card >}}

Disable skin styles by setting the `disabled` flag:

```toml
[params.hackcss]
  disabled = true # disable skin styles entirely
```

When changing colors review [Custom Styles](../custom-styles), [Trim Color](../trim-color) and [Error Page](../error-page), making any adjustments necessary to achieve the desired look-and-feel.
