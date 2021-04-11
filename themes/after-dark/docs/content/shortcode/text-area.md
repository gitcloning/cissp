+++
title = "Text Area"
description = "Add a multi-line plain-text editing control."
categories = ["experience"]
tags = ["controls"]
html_attributes = ["id", "name", "class", "autocomplete", "autofocus", "cols", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "wrap", "tabindex"]
custom_attributes = ["text"]
snippets_used = []
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Read-only with prefilled text:

```html
{{</* hackcss-textarea readonly="true" text="Only this and nothing more." */>}}
```

{{< hackcss-textarea readonly="true" text="Only this and nothing more." >}}

With spellcheck disabled:

```html
{{</* hackcss-textarea spellcheck="false" */>}}
```

{{< hackcss-textarea spellcheck="false" >}}

With 16 columns and hard wrapping enabled:

```html
{{</* hackcss-textarea cols="16" wrap="hard" */>}}
```

{{< hackcss-textarea cols="16" wrap="hard" >}}

Inside disabled form group with error label and placeholder:

```html
{{</* hackcss-formgroup hastextarea="true" disabled="true" state="error" >}}
  {{< hackcss-label for="message" text="Message:" />}}
  {{< hackcss-textarea id="message" placeholder="Guestbook offline…" rows="10" >}}
{{< /hackcss-formgroup */>}}
```

{{< hackcss-formgroup hastextarea="true" disabled="true" state="error" >}}
  {{< hackcss-label for="message" text="Message:" />}}
  {{< hackcss-textarea id="message" placeholder="Guestbook offline…" rows="10" >}}
{{< /hackcss-formgroup >}}
