+++
title = "Hall of Mirrors"
slug = "hall-of-mirrors"
description = "Responsive PhotoSwipe Image Galleries add-on module for After Dark."
summary = "Responsive PhotoSwipe Image Galleries."
categories = ["addon"]
tags = ["module", "images", "graphics", "engagement"]
features = ["related content", "snippets", "section menu"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

**PhotoSwipe Homepage:** {{< external "http://photoswipe.com" />}}<br>
**Module Source:** {{< external "https://git.habd.as/comfusion/hall-of-mirrors" />}}

## Demo

{{< hackcss-alert >}}
  {{< video controls="true" preload="auto" src="https://habd.as/code/after-dark/assets/after-dark-hall-of-mirrors-demo.mp4" width="100%" >}}
{{< /hackcss-alert >}}

## Installation

Choose a module download source:

- {{< external "https://www.npmjs.com/package/hall-of-mirrors" />}}
- {{< external "https://www.jsdelivr.com/package/npm/hall-of-mirrors" />}}
- {{< external "https://git.habd.as/comfusion/hall-of-mirrors" />}}

Extract module contents into site `themes` directory:

```sh
├── static
└── themes
    ├── after-dark
    └── hall-of-mirrors
```

Specify module in site config:

{{< highlight toml "linenos=inline,linenostart=6" >}}
# Controls default theme and theme components
theme = [
  "hall-of-mirrors", # sequence before "after-dark"
  "after-dark"
]
{{< /highlight >}}

See {{< external href="https://git.habd.as/comfusion/hall-of-mirrors/src/branch/master/README.md" text="README.md" />}} to confirm you're using the minimum required version of After Dark; and module setup, configuration and usage instructions. If you need help you may {{< external href="https://git.habd.as/comfusion/hall-of-mirrors/issues" text="Submit an Issue" />}} with your question.
