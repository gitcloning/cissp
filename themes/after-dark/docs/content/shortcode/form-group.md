+++
title = "Form Group"
description = "Use with Label to visualize control validation states."
categories = ["experience"]
tags = ["form"]
html_attributes = ["disabled", "form", "name", "class", "legend", "body"]
custom_attributes = ["hastextarea", "state"]
snippets_used = ["label", "text input", "text area", "help block"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

[Label](../label) states with [Text Input](../text-input):

```html
{{</* hackcss-formgroup >}}
  {{< hackcss-label for="default" text="Default:" />}}
  {{< hackcss-textinput id="default" >}}
{{< /hackcss-formgroup */>}}

{{</* hackcss-formgroup state="success" >}}
  {{< hackcss-label for="success" text="Success:" />}}
  {{< hackcss-textinput id="success" >}}
{{< /hackcss-formgroup */>}}

{{</* hackcss-formgroup state="warning" >}}
  {{< hackcss-label for="warning" text="Warning:" />}}
  {{< hackcss-textinput id="warning" >}}
{{< /hackcss-formgroup */>}}

{{</* hackcss-formgroup state="error" >}}
  {{< hackcss-label for="error" text="Error:" />}}
  {{< hackcss-textinput id="error" >}}
{{< /hackcss-formgroup */>}}
```

{{< hackcss-formgroup >}}
  {{< hackcss-label for="default" text="Default:" />}}
  {{< hackcss-textinput id="default" >}}
{{< /hackcss-formgroup >}}

{{< hackcss-formgroup state="success" >}}
  {{< hackcss-label for="success" text="Success:" />}}
  {{< hackcss-textinput id="success" >}}
{{< /hackcss-formgroup >}}

{{< hackcss-formgroup state="warning" >}}
  {{< hackcss-label for="warning" text="Warning:" />}}
  {{< hackcss-textinput id="warning" >}}
{{< /hackcss-formgroup >}}

{{< hackcss-formgroup state="error" >}}
  {{< hackcss-label for="error" text="Error:" />}}
  {{< hackcss-textinput id="error" >}}
{{< /hackcss-formgroup >}}

Disabling [Label](../label) and disabled [Text Area](../text-area) with [Help Block](../help-block):

```html
{{</* hackcss-formgroup hastextarea="true" disabled="true" >}}
  {{< hackcss-helpblock >}}<strong>Sorry! Guestbook offline…</strong>{{< /hackcss-helpblock >}}
  {{< hackcss-label for="message" text="Message:" />}}
  {{< hackcss-textarea id="message" rows="10" >}}
{{< /hackcss-formgroup */>}}
```

{{< hackcss-formgroup hastextarea="true" disabled="true" >}}
  {{< hackcss-helpblock >}}<strong>Sorry! Guestbook offline…</strong>{{< /hackcss-helpblock >}}
  {{< hackcss-label for="message" text="Message:" />}}
  {{< hackcss-textarea id="message" rows="10" >}}
{{< /hackcss-formgroup >}}
