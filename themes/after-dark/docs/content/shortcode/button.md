+++
title = "Button"
description = "Add colorful buttons to forms and pages."
categories = ["experience"]
tags = ["controls"]
html_attributes = ["id", "value", "name", "class", "onclick", "tabindex", "target", "disabled", "form"]
custom_attributes = ["type", "text", "isghost", "isblock", "action", "method"]
snippets_used = ["button", "button group", "throbber", "form", "external"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Different types:

```html
{{</* hackcss-button text="Default" /*/>}}
{{</* hackcss-button text="Primary" type="primary" /*/>}}
{{</* hackcss-button text="Success" type="success" /*/>}}
{{</* hackcss-button text="Info" type="info" /*/>}}
{{</* hackcss-button text="Warning" type="warning" /*/>}}
{{</* hackcss-button text="Error" type="error" /*/>}}
```

{{< hackcss-button text="Default" />}}
{{< hackcss-button text="Primary" type="primary" />}}
{{< hackcss-button text="Success" type="success" />}}
{{< hackcss-button text="Info" type="info" />}}
{{< hackcss-button text="Warning" type="warning" />}}
{{< hackcss-button text="Error" type="error" />}}

Ghost types:

```html
{{</* hackcss-button isghost="true" text="Default" /*/>}}
{{</* hackcss-button isghost="true" text="Primary" type="primary" /*/>}}
{{</* hackcss-button isghost="true" text="Success" type="success" /*/>}}
{{</* hackcss-button isghost="true" text="Info" type="info" /*/>}}
{{</* hackcss-button isghost="true" text="Warning" type="warning" /*/>}}
{{</* hackcss-button isghost="true" text="Error" type="error" /*/>}}
```

{{< hackcss-button isghost="true" text="Default" />}}
{{< hackcss-button isghost="true" text="Primary" type="primary" />}}
{{< hackcss-button isghost="true" text="Success" type="success" />}}
{{< hackcss-button isghost="true" text="Info" type="info" />}}
{{< hackcss-button isghost="true" text="Warning" type="warning" />}}
{{< hackcss-button isghost="true" text="Error" type="error" />}}

Block-level:

```html
{{</* hackcss-button type="primary" isghost="true" isblock="true" text="Block Level Button" /*/>}}
```

{{< hackcss-button type="primary" isghost="true" isblock="true" text="Block Level Button" />}}

Text in body:

```html
{{</* hackcss-button >}}Default{{< /hackcss-button */>}}
{{</* hackcss-button type="primary" >}}<i>HTML</i>{{< /hackcss-button */>}}
{{%/* hackcss-button type="success" %}}~~Markdown~~{{% /hackcss-button */%}}
{{</* hackcss-button isghost="true" text="Comment" >}}Hidden comment{{< /hackcss-button */>}}
```

{{< hackcss-button >}}Default{{< /hackcss-button >}}
{{< hackcss-button type="primary" >}}<i>HTML</i>{{< /hackcss-button >}}
{{% hackcss-button type="success" %}}~~Markdown~~{{% /hackcss-button %}}
{{< hackcss-button isghost="true" text="Comment" >}}Hidden comment{{< /hackcss-button >}}

In [Button Group](../button-group):

```html
{{</* hackcss-buttongroup >}}
  {{< hackcss-button isghost="true" type="success" text="Left" >}}
  {{< hackcss-button isghost="true" type="success" text="Middle" >}}
  {{< hackcss-button isghost="true" type="success" text="Right" >}}
{{< /hackcss-buttongroup */>}}
```

{{< hackcss-buttongroup >}}
  {{< hackcss-button isghost="true" type="success" text="Left" />}}
  {{< hackcss-button isghost="true" type="success" text="Middle" />}}
  {{< hackcss-button isghost="true" type="success" text="Right" />}}
{{< /hackcss-buttongroup >}}

Print preview:

```html
{{</* hackcss-button type="info" isghost="true" onclick="print()" >}}
  <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path d="M7 25 L2 25 2 9 30 9 30 25 25 25 M7 19 L7 30 25 30 25 19 Z M25 9 L25 2 7 2 7 9 M22 14 L25 14" />
  </svg>
{{< /hackcss-button */>}}
```

{{< hackcss-button type="info" isghost="true" onclick="print()" >}}
  <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path d="M7 25 L2 25 2 9 30 9 30 25 25 25 M7 19 L7 30 25 30 25 19 Z M25 9 L25 2 7 2 7 9 M22 14 L25 14" />
  </svg>
{{< /hackcss-button >}}

[Loading](../throbber) indication:

```html
{{</* hackcss-button type="info" isghost="true" >}}
  Loading&hellip; {{< hackcss-throbber >}}
{{< /hackcss-button */>}}
```

{{< hackcss-button type="info" isghost="true" >}}
  Loading&hellip; {{< hackcss-throbber >}}
{{< /hackcss-button >}}

[External](../external) navigation:

```html
{{</* external rel="shortlink" href="https://go.habd.as/mavic-air" >}}
  {{< hackcss-button type="success" text="Open" />}}
{{< /external */>}}
```

{{< external rel="shortlink" href="https://go.habd.as/mavic-air" >}}
  {{< hackcss-button type="success" text="Open" />}}
{{< /external >}}

[Form](../form) control:

```html
{{</* hackcss-form action="javascript:alert('Form Alert')" >}}
  {{< hackcss-buttongroup formactions="true" >}}
    {{< hackcss-button text="Custom Action" action="javascript:alert('Custom Alert')" isghost="true" type="primary" />}}
    {{< hackcss-button disabled="true" isghost="true" text="Disabled" />}}
  {{< /hackcss-buttongroup >}}
{{< /hackcss-form */>}}
```

{{< hackcss-form action="javascript:alert('Form Alert')" >}}
  {{< hackcss-buttongroup formactions="true" >}}
    {{< hackcss-button text="Custom Action" action="javascript:alert('Custom Alert')" isghost="true" type="primary" />}}
    {{< hackcss-button disabled="true" isghost="true" text="Disabled" />}}
  {{< /hackcss-buttongroup >}}
{{< /hackcss-form >}}

```html
{{</* hackcss-form id="owner" action="javascript:alert('Form Alert')" /*/>}}
{{</* hackcss-button form="owner" text="Form Action" type="primary" isghost="true" /*/>}}
```

{{< hackcss-form id="owner" action="javascript:alert('Form Alert')" />}}
{{< hackcss-button form="owner" text="Form Action" type="primary" isghost="true"  />}}
