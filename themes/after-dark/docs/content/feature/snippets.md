+++
title = "Snippets"
description = "Share code between Shortcodes and Custom Layouts."
categories = ["customizing"]
tags = ["shortcodes", "templating", "layout"]
features = ["related content", "code highlighter", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Snippets are template abstractions enabling you to reuse the same markup and logic used to create [Shortcodes](/shortcode) in your [Custom Layouts](../custom-layouts).

Take for example the included [Button Group](/shortcode/button-group) shortcode used for creating a set of styled buttons, which we'll look at in detail here.

First the partial:

{{< highlight go-html-template >}}
{{< include "themes/after-dark/layouts/partials/components/buttongroup.html" >}}
{{< /highlight >}}

Now the shortcode:

{{< highlight go-html-template >}}
{{< include "themes/after-dark/layouts/shortcodes/hackcss-buttongroup.html" >}}
{{< /highlight >}}

Notice how the shortcode serves only to collect input and call the partial, which contains all markup and display logic. This delegation of responsibility is the abstraction that enables reuse between content and template.

Now let's see how to actually use it.

Use the [Button Group](/shortcode/button-group) shortcode to group buttons in content:

```html
{{</* hackcss-buttongroup >}}
  {{< hackcss-button text="Left" />}}
  {{< hackcss-button text="Middle" type="info" />}}
  {{< hackcss-button text="Right" isghost="true" />}}
{{< /hackcss-buttongroup */>}}
```

Which creates a styled button group with three buttons as shown here:

{{< hackcss-buttongroup >}}
  {{< hackcss-button text="Left" />}}
  {{< hackcss-button text="Middle" type="info" />}}
  {{< hackcss-button text="Right" isghost="true" />}}
{{< /hackcss-buttongroup >}}

To reuse in layout mirror the `partial` call used inside the shortcode.

All [Shortcodes](/shortcode) implementing {{< external href="https://hackcss.egoist.moe" text="hackcss" />}} components are built using the snippets template abstraction enabling each of them to be reused in [Custom Layouts](../custom-layouts).
