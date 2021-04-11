+++
title = "Label"
description = "Provide accessible captions for form controls."
categories = ["experience"]
tags = []
html_attributes = ["for", "form"]
custom_attributes = ["text"]
snippets_used = ["label", "text input", "form group", "help block"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Explicit label association with [Text Input](../text-input):

```html
{{</* hackcss-label for="query" text="Search query:" /*/>}}
{{</* hackcss-textinput type="search" id="query" */>}}
```

{{< hackcss-label for="query" text="Search query:" />}}
{{< hackcss-textinput type="search" id="query" >}}

Implicit label association using [Text Input](../text-input) and [Help Block](../help-block):

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

Combined with [Form Group](../form-group) to show [Text Input](../text-input) success state:

```html
{{</* hackcss-formgroup state="success" >}}
  {{< hackcss-label for="fullname" text="Full Name:" />}}
  {{< hackcss-textinput id="fullname" value="Edgar Allan Poe" required="true" >}}
{{< /hackcss-formgroup */>}}
```

{{< hackcss-formgroup state="success" >}}
  {{< hackcss-label for="fullname" text="Full Name:" />}}
  {{< hackcss-textinput id="fullname" value="Edgar Allan Poe" required="true" >}}
{{< /hackcss-formgroup >}}

See [Form Group](../form-group) for additional control states.
