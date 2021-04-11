+++
title = "Fractal Forest"
slug = "fractal-forest"
description = "BPG Image Format add-on module for After Dark."
summary = "BPG Image Format (Preinstalled)."
categories = ["addon"]
tags = ["module", "images", "graphics", "installation", "performance"]
features = ["related content", "snippets", "section menu"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

**BPG Image format Homepage:** {{< external "https://bellard.org/bpg/" />}}<br>
**Module Source:** {{< external "https://git.habd.as/comfusion/fractal-forest" />}}

## Demo

- {{< external "http://xooyoozoo.github.io/yolo-octo-bugfixes/" "Visual comparison" />}} between BPG, JPEG, JP2K and WebP
- {{< external "https://bellard.org/bpg/lena.html" "Lena 512x512 image, visual comparison with JPEG" />}}
- {{< external "https://bellard.org/bpg/gallery1.html" "Wikipedia photos" />}}
- {{< external "https://bellard.org/bpg/gallery2.html" "Images with alpha channel" />}}
- {{< external "https://bellard.org/bpg/gallery3.html" "Test images using different color spaces and bit depth" />}}
- {{< external "https://bellard.org/bpg/animation.html" "Test animations" />}}

## Installation

{{% hackcss-alert type="info" %}}**Note:** Module pre-installed via [Quick Install]({{< relref "quick-install" >}}) with example in post archetype.{{% /hackcss-alert %}}

Choose a module download source:

- {{< external "https://www.npmjs.com/package/fractal-forest" />}}
- {{< external "https://www.jsdelivr.com/package/npm/fractal-forest" />}}
- {{< external "https://git.habd.as/comfusion/fractal-forest" />}}

Extract module contents into site `themes` directory:

```sh
├── static
└── themes
    ├── after-dark
    └── fractal-forest
```

Specify module in site config:

{{< highlight toml "linenos=inline,linenostart=6" >}}
# Controls default theme and theme components
theme = [
  "fractal-forest", # sequence before "after-dark"
  "after-dark"
]
{{< /highlight >}}

See {{< external href="https://git.habd.as/comfusion/fractal-forest/src/branch/master/README.md" text="README.md" />}} to confirm you're using the minimum required version of After Dark; and module setup, configuration and usage instructions. If you need help you may {{< external href="https://git.habd.as/comfusion/fractal-forest/issues" text="Submit an Issue" />}} with your question.
