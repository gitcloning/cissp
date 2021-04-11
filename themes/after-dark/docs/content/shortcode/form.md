+++
title = "Form"
description = "Collect, validate and handle user input."
categories = ["experience"]
tags = ["controls"]
html_attributes = ["id", "name", "accept-charset", "action", "enctype", "target", "novalidate", "method", "class", "autocomplete"]
custom_attributes = []
snippets_used = ["help block", "button", "alert", "throbber", "label", "form group", "form", "text input"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

With auto-focused [Text Input](../text-input) requesting a new email address:

```html
{{</* hackcss-form autocomplete="disabled" >}}
  {{< hackcss-textinput autofocus="true" type="email" placeholder="Please change your email…" >}}
{{< /hackcss-form */>}}
```

{{< hackcss-form autocomplete="disabled" >}}
  {{< hackcss-textinput autofocus="true" type="email" placeholder="Please change your email…" >}}
{{< /hackcss-form >}}

With [Text Input](../text-input) and [Label](../label) inside [Form Group](../form-group) running [Fuzzy Search](/feature/fuzzy-search) in new window:

```html
{{</* hackcss-form id="search" action="/search/" target="_blank" */>}}
{{</* hackcss-formgroup >}}
  {{< hackcss-label for="query" text="Search query:" />}}
  {{< hackcss-textinput id="query" type="search" name="s" form="search" >}}
{{< /hackcss-formgroup */>}}
```

{{< hackcss-form id="search" action="/search" target="_blank" />}}
{{< hackcss-formgroup >}}
  {{< hackcss-label for="query" text="Search query:" />}}
  {{< hackcss-textinput id="query" type="search" name="s" form="search" >}}
{{< /hackcss-formgroup >}}

Two forms with a [Button](../button) and [Text Input](../text-input) inside [Alert](../alert) with [Throbber](../throbber):

```html
{{</* hackcss-alert type="info" >}}
  {{< hackcss-form id="throttle" method="post" action="/throttle" />}}
  {{< hackcss-form id="choke" novalidate="true" />}}
  {{< hackcss-button type="primary" form="choke" text="Doh!" disabled="true" />}}
  This one doesn't actually do anything… {{< hackcss-throbber >}}
  {{< hackcss-textinput type="hidden" name="speed" value="80" form="throttle" >}}
{{< /hackcss-alert */>}}
```

{{< hackcss-alert type="info" >}}
  {{< hackcss-form id="throttle" method="post" action="/throttle" />}}
  {{< hackcss-form id="choke" novalidate="true" />}}
  {{< hackcss-button type="primary" form="choke" text="Doh!" disabled="true" />}}
  This one doesn't actually do anything… {{< hackcss-throbber >}}
  {{< hackcss-textinput type="hidden" name="speed" value="80" form="throttle" >}}
{{< /hackcss-alert >}}

With [Form Group](../form-group), [Label](../label), required and validated [Text Input](../text-input) and [Help Block](../help-block):

```html
{{</* hackcss-form name="validate" action="/validate" >}}
  {{< hackcss-formgroup name="integrity" >}}
    {{< hackcss-label for="digest" >}}
      <abbr title="Secure Hash Algorithm">SHA-512</abbr> Digest:
    {{< /hackcss-label >}}
    {{< hackcss-textinput
        required="true"
        autofocus="true"
        autocomplete="off"
        type="text" id="digest" name="digest"
        pattern="^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$" >}}
    {{< hackcss-helpblock >}}
      Submit with digest to validate installation.
      <noscript>JavaScript must be enabled for proper validation.</noscript>
    {{< /hackcss-helpblock >}}
  {{< /hackcss-formgroup >}}
{{< /hackcss-form */>}}
```

{{< hackcss-form name="validate" action="/validate" >}}
  {{< hackcss-formgroup name="integrity" >}}
    {{< hackcss-label for="digest" >}}
      <abbr title="Secure Hash Algorithm">SHA-512</abbr> Digest:
    {{< /hackcss-label >}}
    {{< hackcss-textinput
        required="true"
        autocomplete="off"
        type="text" id="digest" name="digest"
        pattern="^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$" >}}
    {{< hackcss-helpblock >}}
      Submit with digest to validate installation.
      <noscript>JavaScript must be enabled for proper validation.</noscript>
    {{< /hackcss-helpblock >}}
  {{< /hackcss-formgroup >}}
{{< /hackcss-form >}}
