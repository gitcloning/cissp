+++
title = "Section Menu"
description = "Display a contextual site-wide navigation with links."
categories = ["navigation"]
tags = ["links", "taxonomy"]
features = ["code highlighter", "snippets", "section menu"]
notes = [
  "review 'fuzzy-search' examples if modified"
]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark uses Hugo's {{< external href="https://gohugo.io/templates/menu-templates/#section-menu-for-lazy-bloggers" text="Section Menu for “Lazy” Bloggers" />}} to create a site-wide navigational aid. The section menu is disabled by default.

{{< hackcss-card header="Interactive Example" >}}
  {{< navmenu >}}
{{< /hackcss-card >}}

Enable it from `menu.main` layout config in your site configuration:

```toml
[params.layout.menu.main]
  hidden = true # set `false` or remove to show section menu
```

With the menu enabled navigation links will begin appearing automatically on a per-section basis whenever {{< external href="https://gohugo.io/getting-started/usage/#draft-future-and-expired-content" text="Published Content" />}} is available within that section.

## Customizing

Adjust link names and menu positions by adding the following code block to your {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}} and modifying it to meet your needs:

```toml
[[menu.main]]
  name = "Home"
  weight = 1
  identifier = "home"
  url = "/"

[[menu.main]]
  name = "Posts"
  weight = 2
  identifier = "post"
  url = "/post/"
```

Exclude menu items by identifier:

```toml
[params.layout.menu.main]
  exclude = ["home", "post"] # exclude homepage and blog postings
```

Decorate links with SVG icons using `pre` and `post`:

```toml
[[menu.main]]
  name = "Search"
  identifier = "search"
  url = "/search/"
  post = "<svg aria-hidden=\"true\" class=\"i-search\" viewBox=\"0 0 32 32\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"><circle cx=\"14\" cy=\"14\" r=\"12\" /><path d=\"M23 23 L30 30\" /></svg>"
```

Link to stand-alone pages using {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}} menu setting:

```toml
title = "About"
menu = "main"
```

Change the link title to differentiate from page:

```toml
title = "About Us"
menu = "main"
linktitle = "About"
```

Position items using {{< external "https://gohugo.io/variables/menus/#menu-entry-variables" "Menu Entry Variables" />}} for more control:

```toml
title = "About Us"
[menu.main]
  name = "About"
  weight = 5
```

Provide your own config settings for use in [Custom Layouts]({{< relref "custom-layouts" >}}):

```toml
[params.layout.menu.main.custom]
  social_icons = ["telegram", "mastodon", "matrix"]
```

And access them via your customized `navmenu.html`, if present:

```go-html-template
{{ range .settings.custom.social_icons }}
  {{ partial "social-links.html" . }}
{{ end }}
```

Create a second menu immediately after the first:

```toml
[[menu.main]]
  name = "Posts"
  weight = 2
  identifier = "post"
  url = "/post/"

[[menu.utility]]
  name = "Email"
  weight = 1
  identifier = "email"
  url = "mailto:d0x3d@posteo.com"
```

And position it to the right using [Custom Styles]({{< relref "custom-styles" >}}):

```css
.hack > header {
  display: grid;
  grid-template-columns: 1fr minmax(min-content, auto);
  column-gap: 20px;
  grid-template-areas: "nav nav";
}
```

See {{< external href="https://gohugo.io/content-management/menus/" text="Menus in Hugo" />}} for additional capabilities. For help with CSS Grid Layout get your feet wet at {{< external "https://cssgridgarden.com" />}}.
