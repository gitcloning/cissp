+++
title = "Text Input"
description = "Add a single-line plain-text editing control."
categories = ["experience"]
tags = ["controls"]
html_attributes = ["id", "name", "class", "autocomplete", "autofocus", "disabled", "form", "formaction", "formmethod", "formtarget", "height", "max", "maxlength", "min", "minlength", "multiple", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "tabindex", "type", "value", "width"]
custom_attributes = []
snippets_used = ["text input", "label", "form group", "form", "help block"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Basic usage:

```html
{{</* hackcss-textinput */>}}
{{</* hackcss-textinput type="password" */>}}
{{</* hackcss-textinput type="email" placeholder="Please enter your email…" */>}}
{{</* hackcss-textinput disabled="true" placeholder="Disabled" */>}}
```

{{< hackcss-textinput >}}
{{< hackcss-textinput type="password" >}}
{{< hackcss-textinput type="email" placeholder="Please enter your email…" >}}
{{< hackcss-textinput disabled="true" placeholder="Disabled" >}}

With [Label](../label) and [Help Block](../help-block) in [Form](../form) with custom validation:

```html
{{</* hackcss-form >}}
  {{< hackcss-label >}}
    {{< hackcss-helpblock text="Enter your Associate Tag:" />}}
    {{< hackcss-textinput name="AssociateTag" required="true" pattern="^\b\w*\b-20$" placeholder="associate-20" >}}
  {{< /hackcss-label >}}
{{< /hackcss-form */>}}
```

{{< hackcss-form >}}
  {{< hackcss-label >}}
    {{< hackcss-helpblock text="Enter your Associate Tag:" />}}
    {{< hackcss-textinput name="AssociateTag" required="true" pattern="^\b\w*\b-20$" placeholder="associate-20" >}}
  {{< /hackcss-label >}}
{{< /hackcss-form >}}

In [Form Group](../form-group) with warning [Label](../label) and [Help Block](../help-block):

```html
{{</* hackcss-formgroup state="warning" >}}
  {{< hackcss-label for="key64" text="64-bit PGP key:" />}}
  {{< hackcss-textinput spellcheck="false" type="text" id="key64" >}}
  {{< hackcss-helpblock text="In this format: BB73 67EE 9A70 A631" />}}
{{< /hackcss-formgroup */>}}
```

{{< hackcss-formgroup state="warning" >}}
  {{< hackcss-label for="key64" text="64-bit PGP key:" />}}
  {{< hackcss-textinput spellcheck="false" type="text" id="key64" >}}
  {{< hackcss-helpblock text="In this format: BB73 67EE 9A70 A631" />}}
{{< /hackcss-formgroup >}}

Typed with [Label](../label) in [Form Group](../form-group) targeting [Form](../form) owner:

```html
{{</* hackcss-form id="search" action="/search" /*/>}}
{{</* hackcss-formgroup >}}
  {{< hackcss-label for="query" text="Search query:" />}}
  {{< hackcss-textinput type="search" id="query" form="search" >}}
{{< /hackcss-formgroup */>}}
```

{{< hackcss-form id="search" action="/search" />}}
{{< hackcss-formgroup >}}
  {{< hackcss-label for="query" text="Search query:" />}}
  {{< hackcss-textinput type="search" id="query" name="s" form="search" >}}
{{< /hackcss-formgroup >}}
