+++
title = "Help Block"
description = "Combine with form controls to guide user input."
categories = ["experience"]
tags = []
html_attributes = ["class"]
custom_attributes = ["text"]
snippets_used = ["form group", "text input"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Plain or formatted text:

```html
{{</* hackcss-helpblock text="Plain text Help Block" /*/>}}
{{</* hackcss-helpblock >}}<i>Italicized HTML Help Block</i>{{< /hackcss-helpblock */>}}
{{%/* hackcss-helpblock %}}**Bold Markdown Help Block**{{% /hackcss-helpblock */%}}
```
{{< hackcss-helpblock text="Plain text Help Block" />}}
{{< hackcss-helpblock >}}<i>Italicized HTML Help Block</i>{{< /hackcss-helpblock >}}
{{% hackcss-helpblock %}}**Bold Markdown Help Block**{{% /hackcss-helpblock %}}

Used above and below [Text Input](../text-input) with `class` attribute:

```html
{{</* hackcss-formgroup >}}
  {{< hackcss-helpblock >}}
    <strong>Enter a <em>secure</em> password below:</strong>
  {{< /hackcss-helpblock >}}
  {{< hackcss-textinput type="password" minlength="27" >}}
  {{< hackcss-helpblock class="muted" text="Min. 27 chars" />}}
{{< /hackcss-formgroup */>}}
```

{{< hackcss-formgroup >}}
  {{< hackcss-helpblock >}}
    <strong>Enter a <em>secure</em> password below:</strong>
  {{< /hackcss-helpblock >}}
  {{< hackcss-textinput type="password" minlength="27" >}}
  {{< hackcss-helpblock class="muted" text="Min. 27 chars" />}}
{{< /hackcss-formgroup >}}
