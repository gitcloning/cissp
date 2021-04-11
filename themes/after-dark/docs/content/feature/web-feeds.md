+++
title = "Web Feeds"
description = "Share RSS feeds with full-content and optional enclosures."
categories = ["search"]
tags = ["metadata", "robots", "SEO"]
features = ["snippets", "related content", "code highlighter"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark provides RSS web feeds conforming with the {{< external "https://cyber.harvard.edu/rss/rss.html" "RSS 2.0 Specification" />}} and enhanced semantically using the following custom extensions:

- {{< external "https://purl.org/rss/1.0/modules/content/" "Content Module" />}} to convey the full content of pages and posts
- {{< external "https://purl.org/dc/elements/1.1/" "Dublin Core" />}} to give authorship credit on individual pages
- {{< external "https://www.w3.org/2005/Atom" "Atom" />}} for improved compatibility with Atom feeds

Feeds are generated automatically on a per-section basis, in addition to a consolidated site-wide feed combining content from across the site:

- [/index.xml](/index.xml) site-wide feed
- [/feature/index.xml](/feature/index.xml) features feed
- [/module/index.xml](/module/index.xml) modules feed
- [/shortcode/index.xml](/shortcode/index.xml) shortcodes feed
- [/extra/index.xml](/extra/index.xml) extras feed

Add multimedia attachments to pages and posts using RSS enclosures. Enclosures will output automatically to feeds when supplied. To supply an enclosure create a {{< external "https://gohugo.io/content-management/page-bundles/" "Page Bundle" />}} as described in [Post Images]({{< relref "post-images" >}}) and shown here for a blog post:

```
├── archetypes
├── content
│   └── post
│       └── backup-restore-macos-mojave
│           ├── assets
│           │   └── macos_v10.14.3-upgrade-fail.mp4
│           ├── images
│           └── index.md
├── layouts
```

Then reference the resource from front matter as shown here:

```toml
[[resources]]
  src = "assets/macos_v10.14.3-upgrade-fail.mp4"
  name = "enclosure"
  title = "Software Update Malfunction: Mojave 10.14.3"
  [resources.params]
    length = "3705578"
```

{{% hackcss-alert type="info" %}}**Note:** Length is the number of bytes in the file and required by RSS 2.0 spec.{{% /hackcss-alert %}}

{{% hackcss-alert type="success" %}}**Tip:** From a terminal get length using `wc -c < /path/to/file`.{{% /hackcss-alert %}}

Enclosures may be output to page content by creating a custom shortcode or using a [Custom Layout]({{< relref "custom-layouts" >}}) with content like:

```go-html-template
{{ with .Resources.GetMatch "enclosure" }}{{ if .Params.length }}
  <svg id="i-paperclip" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="var(--accent-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path d="M10 9 L10 24 C10 28 13 30 16 30 19 30 22 28 22 24 L22 6 C22 3 20 2 18 2 16 2 14 3 14 6 L14 23 C14 24 15 25 16 25 17 25 18 24 18 23 L18 9" />
  </svg>
  <a href="{{ .Permalink }}" title="{{ with .Title }}{{ . }} {{ end }}[{{ .Params.length }} byte {{ .MediaType }}]">Enclosure</a>
{{ end }}{{ end }}
```

Use the {{< external "https://validator.w3.org/feed/" "W3C Feed Validation Service" />}} to validate your feed. For help creating custom shortcodes see {{< external "https://gohugo.io/templates/shortcode-templates/#create-custom-shortcodes" "Create Your Own Shortcodes" />}} on the Hugo docs site.

See {{< external "https://gohugo.io/templates/rss/" "RSS Templates" />}} in Hugo for additional information.
