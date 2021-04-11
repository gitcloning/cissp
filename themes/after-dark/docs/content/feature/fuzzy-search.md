+++
title = "Fuzzy Search"
description = "Quickly locate indexed content anywhere on the site."
categories = ["navigation"]
tags = ["links", "search", "controls"]
features = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

If a search engine can find it, so can you. Quickly locate indexable content site-wide with fuzzy search. No registration necessary.

{{< hackcss-card header="Interactive Example" >}}
  <iframe scrolling="no" title="Error Page Example" width="100%" height="300" src="/search/?s=uzzy%20searvh"></iframe>
{{< /hackcss-card >}}

Adjust it from `_index.md` in the site `content/search` directory:

```
├── archetypes
├── content
│   └── search
│       └── _index.md
├── static
├── themes
```

If the file doesn't exist, yet create it:

```sh
$ hugo new search/_index.md
```

And specify the `JSON` {{< external href="https://gohugo.io/templates/output-formats" text="Output Format" />}} in site config:

```toml
[outputs]
  home = ["HTML", "RSS", "JSON"]
```

{{% hackcss-alert type="info" %}}**Note:** This adds `JSON` while keeping the `HTML` and `RSS` defaults.{{% /hackcss-alert %}}

Once activated your site will begin outputting an `index.json` file during generation, giving fuzzy search the data it needs to help you locate pages.

Try it now by navigating to [domain.example/search](/search/), or, if enabled, `Search` in the [Section Menu](../section-menu/), entering a query and navigating between results using <kbd>Tab</kbd>.
