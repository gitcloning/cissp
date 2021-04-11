+++
title = "Custom Homepage"
description = "Hide the blog and specify how content is shown."
categories = ["customizing"]
tags = ["layout", "templating", "style", "metadata", "semantics", "robots"]
features = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark provides a configurable way to customize the content shown on your homepage without the need for creating a [Custom Layout](../custom-layouts). Use it to hide the blog and display recent content from various sections of your site.

{{< hackcss-alert >}}
{{< figure
  src="/images/screenshots/feature-homepage-fs8.png"
>}}
{{< /hackcss-alert >}}

{{< hackcss-card header="Quick Example" >}}
{{< highlight toml "linenos=inline" >}}
[params.layout.home]
  hide_blog = true

[[params.layout.home.section]]
  type = "about"
  weight = 1

[[params.layout.home.section]]
  type = "code" # Required, name of section to show on homepage
  limit = 4 # Optional, set number of items to show from section
  weight = 2 # Optional, choose layout order for section
  thumbs = ["fill", "400x400"] # Optional, thumbnail image processing

[[params.layout.home.section]]
  type = "site"
  limit = 2
  weight = 3

[[params.layout.home.section]]
  type = "post"
  limit = 3
  weight = 4
{{< /highlight >}}
{{< /hackcss-card >}}

Start by adding a section to display:

```toml
[[params.layout.home.section]]
  type = "post"
```

Limit the number of items shown:

```toml
[[params.layout.home.section]]
  type = "post"
  limit = 3
```

Then hide the blog if you like:

```toml
[params.layout.home]
  hide_blog = true
```

And use the space to add more sections:

```toml
[[params.layout.home.section]]
  type = "post"

[[params.layout.home.section]]
  type = "podcast"
```

Or add stand-alone pages too:

```toml
[[params.layout.home.section]]
  type = "about"
```

And display them in order by weight:

```toml
[[params.layout.home.section]]
  type = "about"
  weight = 1

[[params.layout.home.section]]
  type = "podcast"
  weight = 2
```

With each section containing generic [Structured Data](../structured-data):

```
Homepage
├── Thing
└── ItemList
    ├── Thing
    ├── Thing
    └── Thing
```

Which may be enhanced using front matter:

```
├── archetypes
├── content
│   └── about.md
│   └── podcast
│       ├── _index.md
│       ├── secrets-of-silicon-valley
│       ├── the-5g-dragnet
│       └── language-is-a-weapon
├── layouts
```

```toml
title = "About"
description = "Information about the site."
[schema]
  type = "AboutPage" # inside about.md
```

```toml
title = "Podcasts"
description = "Live on the Web. Fresh to your head."
[schema]
  type = "Audiobook" # inside _index.md
```

Resulting in machine-readable structure:

```
Homepage
├── AboutPage
└── ItemList
    ├── Audiobook
    ├── Audiobook
    └── Audiobook
```

Including `name` and `description` properties consistent between what's shown to users and what will appear in <abbr title="Search Engine Results Page">SERP</abbr>s.

Item lists may include thumbnail images generated automatically for any `ItemList` element using a [Post Images](../post-images)-formatted resource bundle and containing `thumbnail` in the name:

```toml
[[resources]]
  src = "**hyperdrive-logo.png"
  name = "header thumbnail"
```

Images include high-performance defaults and may be modified using {{< external "https://gohugo.io/content-management/image-processing/#readout" "Hugo Image Processing" />}} via config using the `thumbs` property in site config:

```toml
[[params.layout.home.section]]
  type = "code"
  thumbs = ["fill", "400x400"]
```

Valid image processing options are `fit`, `resize` and `fill`, and image dimensions may be omitted for a 4x3 aspect ratio thumbnail.
