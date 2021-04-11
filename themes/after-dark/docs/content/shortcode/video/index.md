+++
title = "Video"
description = "Lazy-load videos and control playback options."
categories = ["experience"]
tags = []
html_attributes = ["class", "autoplay", "controls", "crossorigin", "height", "loop", "muted", "preload", "intrinsicsize", "poster", "src", "width", "playsinline"]
custom_attributes = []
snippets_used = []
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Basic usage:

```html
{{</* video autoplay="true" loop="true" src="assets/sample.mp4" */>}}
```

{{< video autoplay="true" loop="true" src="assets/sample.mp4" >}}

Assumes the following directory structure:

```
├── assets
├── content
│   └── videos
│       └── gifs
│           ├── assets
│           │   └── sample.mp4
│           └── index.md
├── content
```

With controls:

```html
{{</* video controls="true" src="assets/sample.mp4" */>}}
```

{{< video controls="true" src="assets/sample.mp4" >}}

Absolute `src` and `poster` URLs also possible. Absolute URLs must include a scheme such as `http` or `https`. Root-relative URLs not currently possible.
