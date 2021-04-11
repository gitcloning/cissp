+++
title = "Post Images"
description = "Add large hero images without touching an image editor."
categories = ["experience"]
tags = ["performance", "imaging", "graphics", "posts"]
features = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

{{< figure
  src="/images/watercolor_pTIyYTqAlF8_w1440h700.jpeg"
  alt="Map image"
  lqipsrc="/images/watercolor_pTIyYTqAlF8_w936h455.jpeg"
  caption="Sample image placement. Not the real deal."
>}}

Add visual appeal to your posts with post images. Post images appear above post content and leverage {{< external href="https://gohugo.io/content-management/image-processing/" text="Hugo Image Processing" />}} and [Lazy Loading](../lazy-loading) to provide fully automatic, lazy-loaded responsive images with <abbr title="Low-Quality Image Placeholders">LQIP</abbr> and built-in art direction.

Using post images requires some opinion with regard to the structure of your content. To create a post with a post image you must:

1. Group image and content in a {{< external href="https://gohugo.io/content-management/page-bundles/" text="Page Bundle" />}} as shown below.
2. Update post {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}} as described below.

An example page bundle might look like:

```
├── archetypes
├── content
│   └── post
│       └── secure-your-digital-life
│           ├── images
│           │   └── florian-klauer-119557-unsplash.jpg
│           └── index.md
├── layouts
```

With a `header` image specified in `index.md`:

```toml
[[resources]]
  src = "images/*119557*"
  name = "header"
```

{{% hackcss-alert type="info" %}}**Tip:** Orientation is not significant. For optimal display use larger images.{{% /hackcss-alert %}}

Add an image caption showing the image title:

```toml
[[resources]]
  src = "**291607-unsplash.jpg"
  name = "header"
  title = "Ottawa road in the evening" # adds image caption
```

Add [Structured Data]({{< relref "structured-data" >}}) using {{< external "https://gohugo.io/content-management/page-resources/#page-resources-metadata" "Resources Metadata" />}} to improve accessibility:

```toml
[[resources]]
  src = "**291607-unsplash.jpg"
  name = "header"
  title = "Ottawa road in the evening"
  [resources.params.meta]
    description = "Light trails depicting speed" # adds alt text and image meta
    creator = "Marc-Olivier Jodoin" # updates caption and adds image meta
```

Continue adding metadata to improve accessibility:

```toml
[[resources]]
  src = "**291607-unsplash.jpg"
  name = "header"
  title = "Ottawa road in the evening"
  [resources.params.meta]
    description = "Light trails depicting speed"
    creator = "Marc-Olivier Jodoin"
    sameAs = "https://unsplash.com/photos/NqOInJ-ttqM/" # also updates caption
    license = "https://unsplash.com/license" # attribution not required
    contentLocation = "Ottawa, Canada"
    keywords = ["light trail", "building", "speed", "night"]
```

Supported metadata in examples above. Adjust display using [Custom Styles]({{< relref "custom-styles" >}}).
