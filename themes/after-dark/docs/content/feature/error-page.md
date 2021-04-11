+++
title = "Error Page"
description = "Give visitors a reason to stay when errors occur."
categories = ["experience"]
tags = ["engagement", "retention", "branding"]
features = ["error page", "snippets", "code highlighter", "related content", "index blocking"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark includes an animated {{< external rel="nofollow help" href="/404.html" text="404 Page" />}} you can display when other pages cannot be found. The error page contains a full-screen background animation and "404" link with Ginsu treatment. Following the link navigates to the homepage.

{{< hackcss-card header="Interactive Example" >}}
  <iframe title="Error Page Example" width="100%" height="300" src="/404.html"></iframe>
{{< /hackcss-card >}}

<!--more-->

Adjust it from `404.html` in the site `content` directory:

```
├── archetypes
├── content
│   ├── post
│   └── 404.html
├── layouts
```

If the file doesn't exist yet, copy it from the theme default:

```sh
$ cp themes/after-dark/content/404.html content
```

Configure your web server to redirect to `404.html` when pages cannot be found to use it. Combine with [Voyeur Module](/module/voyeur) for help creating {{< external href="https://gohugo.io/content-management/urls/#aliases" text="Page Aliases" />}}.
