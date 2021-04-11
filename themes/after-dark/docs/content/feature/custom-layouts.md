+++
title = "Custom Layouts"
description = "Customize layouts without modifying theme source."
categories = ["customizing"]
tags = ["layout", "templating", "style"]
features = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark uses block templates to facilitate the creation of unique page layouts anywhere on your site. Use them to add [Snippets](../snippets) to pages in a section, selectively apply [Custom Styles](../custom-styles) or add an about section to the homepage.

## How it works

Given the following `block` with optional default value:

```go-html-template
<title>{{ block "title" }}Site Title{{ end }}</title>
```

Inheriting templates may omit the block and keep the default value or `define` the block to change its value, as shown here:

```go-html-template
{{ define "title" }}Page Title | Site Title{{ end }}
```

Combined with {{< external href="https://gohugo.io/templates/lookup-order/" text="Lookup Order in Hugo" />}} blocks become valuable in designating editable regions within, and improving reuse of, existing template files.

## Applied in context

Here's the template used to display an individual page in After Dark:

{{< highlight go-html-template >}}
{{< include "themes/after-dark/layouts/_default/single.html" >}}
{{< /highlight >}}

There's not much to it. Most of the code is inherited from another template, giving a clear picture of the page structure and making modifications trivial.

## Creating your own

Imagine you're creating an Audiobooks section for your site and want two new custom layouts: one to list audio clips and another to describe them.

To achieve this using block templates first create an `audiobook` section with a single page to describe a clip:

```sh
$ hugo new audiobook/the-power-of-now.md
```

Resulting in the following `content` tree structure:

```
├── assets
├── content
│   └── audiobook
│       └── the-power-of-now.md
├── layouts
```

If already serving your site the Audiobooks section and page will appear immediately using the default block templates. To customize from default add a `list.html` and `single.html` to a `layouts/audiobook` directory in your site.

If the files don't exist yet, copy them from theme defaults:

```sh
$ mkdir -p layouts/audiobook
$ cp themes/after-dark/layouts/_default/list.html layouts/audiobook
$ cp themes/after-dark/layouts/_default/single.html layouts/audiobook
```

Resulting in the following `layouts` tree structure:

```
├── content
├── layouts
│   └── audiobook
│       ├── list.html
│       └── single.html
├── static
```

Adjust `list.html` and `single.html` layouts and use [Custom Styles](../custom-styles) to achieve the desired result. Reference the following resources for help:

- {{< external "https://gohugo.io/templates/" />}} for templating functions and logic
- {{< external "https://devdocs.io" />}} for a comprehensive HTML and CSS reference
- {{< external "https://internetingishard.com" />}} learn HTML & CSS for free
- {{< external "https://inclusive-components.design" />}} for design pattern ideas
- {{< external "https://diveintohtml5.info" >}} background behind HTML5
- {{< external "https://gsnedders.html5.org/outliner/" />}} test your HTML document outline
