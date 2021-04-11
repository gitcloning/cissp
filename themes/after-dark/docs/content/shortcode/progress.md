+++
title = "Progress"
description = "Show graphical progress bars with completion percentage."
categories = ["experience"]
tags = []
html_attributes = []
custom_attributes = ["showpercent", "value", "filltext"]
snippets_used = ["progress", "card", "alert"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Basic usage:

```html
{{</* hackcss-progress value="40" */>}}
{{</* hackcss-progress value="30" showpercent="true" */>}}
{{</* hackcss-progress value="70" showpercent="true" filltext="pemuatan" */>}}
```

{{< hackcss-progress value="40" >}}
{{< hackcss-progress value="30" showpercent="true" >}}
{{< hackcss-progress value="70" showpercent="true" filltext="pemuatan" >}}

Inside an [Alert](../alert):

{{< hackcss-alert type="warning" >}}
  {{< hackcss-progress value="90" showpercent="true" filltext="Load Average" >}}
{{< /hackcss-alert >}}

Stacked inside a [Card](../card):

```html
{{</* hackcss-card header="Value-added Tax by Country" >}}
  {{< hackcss-progress value="16" showpercent="true" filltext="China – 增值税" >}}
  {{< hackcss-progress value="20" showpercent="true" filltext="France – TVA" >}}
  {{< hackcss-progress value="10" showpercent="true" filltext="Indonesia – PPN" >}}
  {{< hackcss-progress value="8" showpercent="true" filltext="Japan – 消費税" >}}
  {{< hackcss-progress value="15" showpercent="true" filltext="New Zealand – GST" >}}
  {{< hackcss-progress value="20" showpercent="true" filltext="United Kingdom – VAT" >}}
{{< /hackcss-card */>}}
```

{{< hackcss-card header="Value-added Tax by Country" >}}
  {{< hackcss-progress value="16" showpercent="true" filltext="China – 增值税" >}}
  {{< hackcss-progress value="20" showpercent="true" filltext="France – TVA" >}}
  {{< hackcss-progress value="10" showpercent="true" filltext="Indonesia – PPN" >}}
  {{< hackcss-progress value="8" showpercent="true" filltext="Japan – 消費税" >}}
  {{< hackcss-progress value="15" showpercent="true" filltext="New Zealand – GST" >}}
  {{< hackcss-progress value="20" showpercent="true" filltext="United Kingdom – VAT" >}}
{{< /hackcss-card >}}
