+++
title = "Table of Contents"
description = "Quickly locate information in longer posts."
categories = ["navigation"]
tags = ["metadata"]
features = ["related content", "snippets", "code highlighter"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Automatically generate a table of contents with smooth-scroll links based on the current {{< external href="https://gsnedders.html5.org/outliner/" text="page outline" />}}. To do so add the following to post {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}}:

```toml
toc = true
```

Set `false`, or simply remove the setting, to disable.

The table of contents will be collapsed under a disclosure on page load. Once the disclosure is expanded the full page outline will be revealed. Selecting an item in the outline will smooth-scroll to the corresponding section, update the browser history and highlight the section title.
