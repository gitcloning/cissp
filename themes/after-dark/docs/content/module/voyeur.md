+++
title = "Voyeur"
slug = "voyeur"
description = "DIY self-hosted Fathom Analytics add-on module for After Dark."
summary = "DIY self-hosted Fathom Analytics."
categories = ["addon"]
tags = ["module", "analytics", "privacy", "engagement"]
features = ["related content", "snippets", "section menu"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

**Fathom Mirror:** {{< external "https://git.habd.as/comfusion/fathom" />}}<br>
**Module Source:** {{< external "https://git.habd.as/comfusion/voyeur" />}}

{{< figure alt="After Dark screenshots"
  src="/images/screenshots/module-voyeur-analytics-fs8.png"
  caption="Voyeur Analytics Dashboard."
>}}

Please visit the {{< external "https://usefathom.com" "Fathom Website" />}} for interactive product demo.

## Installation

Choose module download source:

- {{< external "https://www.npmjs.com/package/mod-voyeur" />}}
- {{< external "https://www.jsdelivr.com/package/npm/mod-voyeur" />}}
- {{< external "https://git.habd.as/comfusion/voyeur" />}}

Extract module contents into site `themes` directory:

```sh
├── static
└── themes
    ├── after-dark
    └── voyeur
```

Specify module in site config:

{{< highlight toml "linenos=inline,linenostart=6" >}}
# Controls default theme and theme components
theme = [
  "voyeur", # sequence before "after-dark"
  "after-dark"
]
{{< /highlight >}}

See {{< external href="https://git.habd.as/comfusion/voyeur/src/branch/master/README.md" text="README.md" />}} to confirm you're using the minimum required version of After Dark; and module setup, configuration and usage instructions. If you need help you may {{< external href="https://git.habd.as/comfusion/voyeur/issues" text="Submit an Issue" />}} with your question.
