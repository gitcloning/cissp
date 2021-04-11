+++
title = "External"
description = "Create links with external icon and custom behavior."
categories = ["navigation"]
tags = ["links", "security", "privacy"]
html_attributes = ["href", "class", "referrerpolicy", "target", "type", "rel"]
custom_attributes = ["text", "trusted"]
snippets_used = ["external", "button", "alert"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Basic usage:

```html
{{</* external href="https://after-dark.habd.as" text="After Dark" /*/>}}
{{</* external href="https://after-dark.habd.as" /*/>}}
```

{{< external href="https://after-dark.habd.as" text="After Dark" />}}
{{< external href="https://after-dark.habd.as" />}}

Shorthand usage:

```term
{{</* external "https://after-dark.habd.as" "After Dark" /*/>}}
{{</* external href="https://go.habd.as/after-dark" /*/>}}
{{</* external "wss://fs1.habd.as:80" /*/>}}
```

{{< external "https://after-dark.habd.as" "After Dark" />}}
{{< external href="https://go.habd.as/after-dark" />}}
{{< external "wss://fs1.habd.as:80" />}}

{{< hackcss-alert type="info" >}}
<strong>Note:</strong> URIs such as those using the <code>wss</code> scheme may be considered unsafe by the {{< external "https://golang.org/pkg/html/template/" "Go template package" />}}. Learn more in the package {{< external "https://golang.org/pkg/html/template/#hdr-Security_Model" "Security Model" />}}.
{{< /hackcss-alert >}}

With a trusted URL:

```html
{{</* external trusted="true" href="wss://fs1.habd.as:80" /*/>}}
{{</* external trusted="true" href="irc://chat.freenode.net:6667/after-dark" /*/>}}
```

{{< external trusted="true" href="wss://fs1.habd.as:80" />}}
{{< external trusted="true" href="irc://chat.freenode.net:6667/after-dark" />}}

With external link styling removed:

```html
{{</* external rel="noopener" href="https://blog.domain.example" /*/>}}
```

{{< external rel="noopener" href="https://blog.domain.example" />}}

With internal link opening in a new window:

```html
{{</* external href="/404.html" text="Error Page" /*/>}}
```

{{< external href="/404.html" text="Error Page" />}}

With structured data type:

```html
{{</* external itemtype="significantLink" href="https://habd.as" /*/>}}
```

{{< external itemtype="significantLink" href="https://habd.as" />}}

With site-wide [Referrer Policy](/feature/referrer-policy) overridden:

```html
{{</* external referrerpolicy="unsafe-url" href="http://goo.gl" /*/>}}
```

{{< external referrerpolicy="unsafe-url" href="http://goo.gl" />}}

With markdown image and link styling removed:

```markdown
{{%/* external rel="next" href="https://source.unsplash.com/collection/983219/2160x1440" %}}
  ![Example image](https://source.unsplash.com/collection/983219/1080x720 "View Random Image Enlarged")
{{% /external */%}}
```

{{% external rel="next" href="https://source.unsplash.com/collection/983219/1080x720" %}}
  ![Example image](https://source.unsplash.com/collection/983219/1080x720 "View Random Image Enlarged")
{{% /external %}}

With interactive [Button](../button) to run a [Fuzzy Search](/feature/fuzzy-search):

```html
{{</* external rel="search" target="_self" href="/search/?s=button" >}}
  {{< hackcss-button type="primary" text="Search" />}}
{{< /external */>}}
```

{{< external rel="search" target="_self" href="/search/?s=button" >}}
  {{< hackcss-button type="primary" text="Search" />}}
{{< /external >}}
