+++
title = "Select"
description = "List a group of options in a drop-down menu."
categories = ["experience"]
tags = []
html_attributes = ["name", "class", "disabled", "form"]
custom_attributes = ["body"]
snippets_used = ["label", "form group"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Basic usage:

```html
{{</* hackcss-select >}}
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
{{< /hackcss-select */>}}
```

{{< hackcss-select >}}
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
{{< /hackcss-select >}}

With [Label](../label) inside [Form Group](../form-group):

```html
{{</* hackcss-formgroup name="poolgroup" >}}
  {{< hackcss-label for="pool" text="Mining pool:" />}}
  {{< hackcss-select id="pool" name="pool" >}}
    <option>moneroocean.stream</option>
    <option>etn.nanopool.org</option>
    <option>monero.hashvault.pro</option>
  {{< /hackcss-select >}}
{{< /hackcss-formgroup */>}}
```

{{< hackcss-formgroup name="poolgroup" >}}
  {{< hackcss-label for="pool" text="Mining pool:" />}}
  {{< hackcss-select id="pool" name="pool" >}}
    <option>moneroocean.stream</option>
    <option>etn.nanopool.org</option>
    <option>monero.hashvault.pro</option>
  {{< /hackcss-select >}}
{{< /hackcss-formgroup >}}
