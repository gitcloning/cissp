+++
title = "Custom Styles"
description = "Modify theme styles for complete design control."
categories = ["customizing"]
tags = ["color", "style", "branding"]
features = ["code highlighter", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark uses {{< external href="https://gohugo.io/hugo-pipes/" text="Hugo Pipes" />}} to enable customization of theme styles using CSS. Left unmodified the following custom styles are provided by default:

{{< highlight css "linenos=inline" >}}
{{< include "themes/after-dark/assets/css/custom.css" >}}
{{< /highlight >}}

Adjust them from `custom.css` in the site `assets/css` directory:

```
├── archetypes
├── assets
│   └── css
│       └── custom.css
├── content
```

If the file doesn't exist yet, copy it from the theme default:

```sh
$ mkdir -p assets/css
$ cp themes/after-dark/assets/css/custom.css assets/css
```

Then open the file and begin editing, or remove it to restore default styles.

{{< hackcss-alert type="info" >}}
  <strong>Tip:</strong> Choose from thousands of predefined color palettes on {{< external "https://coolors.co/" />}}.
{{< /hackcss-alert >}}
