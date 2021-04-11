+++
title = "SVG Favicon"
description = "Decorate your site with a unique SVG favicon."
categories = ["customizing"]
tags = ["color", "style", "graphics", "branding"]
features = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark ships with an 169B optimized[^1] SVG favicon embedded into every page:

<details>
<summary>Expand to view code</summary>
{{< highlight html >}}
{{< include "themes/after-dark/layouts/partials/head/favicon.html" >}}
{{< /highlight >}}
</details>

{{% hackcss-alert type="info" %}}**Note**: HTML (Go) template comments are stripped out during site generation.{{% /hackcss-alert %}}

The favicon is a black-colored oblique triangle in the shape of a tepee as shown[^2] on the [Online Help](../online-help) [Overview](/). The center of the triangle uses negative space to give the illusion of a second equilateral triangle in the shape of a pyramid, or open fire, contained within.

The color of the icon can be modified by changing the `fill` attribute:

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

Adjust it from `favicon.html` in the site `layouts/partials/head` directory:

```
├── content
├── layouts
│   └── partials
│       └── head
│           └── favicon.html
├── static
```

If the file doesn't exist yet, copy it from the theme default:

```sh
mkdir -p layouts/partials/head && \
cp themes/after-dark/layouts/partials/head/favicon.html layouts/partials/head
```

Replace SVG with another graphic if desired:

```html
<link rel="icon" sizes="128x128" href="/favicon.png">
```

If optimizing for platform experiences do so from within `favicon.html`:

{{< highlight go-html-template >}}
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="{{ .Site.Title }}">
<link rel="apple-touch-icon" href="data:image/png;base64,{{ readFile "static/icon.png" | base64Encode }}">
{{< /highlight >}}

See {{< external href="https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/extend.md#web-apps" text="H5BP Extend" />}} for platform-specific requirements and {{< external href="https://gohugo.io/documentation/" text="Hugo Documentation" />}} for help with templating functions and variables.

[^1]: See [Optimizing SVGs in data URIs](https://codepen.io/tigt/post/optimizing-svgs-in-data-uris) for help optimizing your own SVGs.
[^2]: Learn how to apply [SVG animation with SMIL](https://devdocs.io/svg/svg_animation_with_smil).
