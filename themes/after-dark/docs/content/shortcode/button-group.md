+++
title = "Button Group"
description = "Layout buttons to fit buttons snugly together."
categories = ["interaction"]
tags = ["controls"]
html_attributes = ["class"]
custom_attributes = ["formactions"]
snippets_used = ["button group", "button", "form"]
notes = [
  "update 'snippets' if this content is updated"
]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

With three [Buttons](../button), one ghosted and one of type info:

```html
{{</* hackcss-buttongroup >}}
  {{< hackcss-button text="Left" />}}
  {{< hackcss-button type="info" >}}Middle{{< /hackcss-button >}}
  {{< hackcss-button text="Right" isghost="true" />}}
{{< /hackcss-buttongroup */>}}
```

{{< hackcss-buttongroup >}}
  {{< hackcss-button text="Left" />}}
  {{< hackcss-button type="info" >}}Middle{{< /hackcss-button >}}
  {{< hackcss-button text="Right" isghost="true" />}}
{{< /hackcss-buttongroup >}}

With three [Buttons](../button) styled using `class` attribute:

```html
<style>.btn-text button::after { content: attr(class) }</style>
{{</* hackcss-buttongroup class="btn-text" >}}
  {{< hackcss-button />}}
  {{< hackcss-button type="info" />}}
{{< /hackcss-buttongroup */>}}
```

<style>.btn-text button::after { content: attr(class) }</style>
{{< hackcss-buttongroup class="btn-text" >}}
  {{< hackcss-button />}}
  {{< hackcss-button type="info" />}}
{{< /hackcss-buttongroup >}}

With two [Buttons](../button) inside a [Form](../form) using `formactions` attribute:

```html
{{</* hackcss-form action="/search" >}}
  {{< hackcss-textinput type="hidden" name="s" value="button" >}}
  {{< hackcss-buttongroup formactions="true" >}}
    {{< hackcss-button text="Print" action="javascript:window.print()" />}}
    {{< hackcss-button text="Search" type="primary" isghost="true" />}}
  {{< /hackcss-buttongroup >}}
{{< /hackcss-form */>}}
```

{{< hackcss-form action="/search" >}}
  {{< hackcss-textinput type="hidden" name="s" value="group" >}}
  {{< hackcss-buttongroup formactions="true" >}}
    {{< hackcss-button text="Print" action="javascript:window.print()" />}}
    {{< hackcss-button text="Search" type="primary" isghost="true" />}}
  {{< /hackcss-buttongroup >}}
{{< /hackcss-form >}}
