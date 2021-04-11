+++
title = "Figure"
description = "Load images progressively with blurry placeholders."
categories = ["experience"]
tags = ["performance", "images", "graphics"]
html_attributes = ["class", "alt", "src"]
custom_attributes = ["lqipsrc", "caption", "link", "linktarget", "attr", "attrlink", "title"]
snippets_used = ["external"]
notes = [
  "review 'lazy-loading' if this page is modified"
]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

With progressive image placeholder:

```html
{{</* figure
  alt="Artistic map"
  src="/images/watercolor_pTIyYTqAlF8_w1440h700.jpeg"
  lqipsrc="/images/watercolor_pTIyYTqAlF8_w936h455.jpeg"
  title="Map of Bali in Watercolor"
  attr="Stamen Design"
  attrlink="https://maps.stamen.com/"
*/>}}
```

{{< figure
  alt="Artistic map"
  src="/images/watercolor_pTIyYTqAlF8_w936h455.jpeg"
  lqipsrc="/images/watercolor_pTIyYTqAlF8_w1440h700.jpeg"
  title="Map of Bali in Watercolor"
  attr="Stamen Design"
  attrlink="https://maps.stamen.com/"
>}}

Above as a [Snippet](/feature/snippets/) used in a [Custom Layout](/feature/custom-layouts/):

```go-html-template
{{ partial "components/figure.html" (dict "alt" "Artistic map" "src" "/images/watercolor_pTIyYTqAlF8_w936h455.jpeg" "lqipsrc" "/images/watercolor_pTIyYTqAlF8_w1440h700.jpeg" "title" "Map of Bali in Watercolor" "attr" "Stamen Design" "attrlink" "https://maps.stamen.com/") }}
```

See {{< external href="https://gohugo.io/content-management/shortcodes/#figure" text="Figures in Hugo" />}} for Hugo-specific implementation.
