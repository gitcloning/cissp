+++
title = "Lazy Loading"
description = "Defer loading of images, iframes and scripts."
categories = ["experience"]
tags = ["performance", "images", "graphics"]
features = ["code highlighter", "related content", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark uses {{< external href="https://github.com/aFarkas/lazysizes" text="lazySizes" />}} to prioritize loading of certain external resources to improve page load times and help reduce overall bandwidth consumption.

Lazy loading works automatically for [Custom Homepage](../custom-homepage) thumbnails, [Post Images](../post-images) and when using the [Figure Shortcode](/shortcode/figure), or related [Snippet](../snippets), as seen here:

{{< figure
  src="https://source.unsplash.com/Y-w15LfHO8w/5184x3456"
  lqipsrc="https://source.unsplash.com/Y-w15LfHO8w/1080x720"
  caption="Be Creative"
  attr="AK¥N Cakiner"
  attrlink="https://unsplash.com/@akin"
>}}

To use lazy loading in [Custom Layouts](../custom-layouts) or when creating your own [Shortcodes](/shortcode) adding the `lazyload` class and relevant `data` attributes as shown here:

```html
<!-- non-responsive -->
<img data-src="image.jpg" class="lazyload">
```

```html
<!-- responsive with automatic sizes calculation -->
<img
  data-sizes="auto"
  data-src="image2.jpg"
  data-srcset="image1.jpg 300w, image2.jpg 600w, image3.jpg 900w"
  class="lazyload">
```

```html
<!-- iframe example -->
<iframe frameborder="0"
  class="lazyload"
  allowfullscreen
  data-src="//www.youtube.com/embed/ZfV-aYdU4uE">
</iframe>
```

See {{< external href="https://github.com/aFarkas/lazysizes" text="lazySizes" />}} for additional information and examples.
