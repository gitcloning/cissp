{{/*
Copyright (C) 2019  Josh Habdas <jhabdas@protonmail.com>

This file is part of After Dark.

After Dark is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

After Dark is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/ -}}

+++
title = "{{ replace .TranslationBaseName "-" " " | title }}"
date = {{ .Date }}
description = "This text was generated using the After Dark post archetype."
draft = true
toc = false
categories = ["hacking"]
tags = ["after", "dark"]
images = [
  "https://source.unsplash.com/collection/983219/1600x900"
] # overrides site-wide open graph image
[[copyright]]
  owner = "{{ .Site.Params.author | default .Site.Title }}"
  date = "{{ now.Format "2006" }}"
  license = "cc-by-nc-sa-4.0"
+++

Before continuing please create a post archetype. Archetypes are located within markdown files in the `archetypes` directory of your site:

```
flying-toasters
├── archetypes
│   ├── default.md
│   └── post.md
├── content
```

If `post.md` does not exist yet, copy it from the After Dark default:

```sh
$ cd flying-toasters
$ cp themes/after-dark/archetypes/post.md archetypes/
```

Make some changes to `post.md` then use `hugo new` to draft a new post:

```sh
$ vi archetypes/post.md # or vim, emacs, nano ...
$ hugo new post/totally-twisted.md
```

If `hugo server` is running with the `--navigateToChanged` flag your new post will appear automatically in JavaScript-enabled browsers. If you see an empty page you probably need to restart `hugo server` with the `--buildDrafts` flag.

Use archetypes to maintain consistency when creating content for [Custom Layouts](http://localhost:1414/feature/custom-layouts). Like custom layouts {{< external href="https://gohugo.io/content-management/archetypes/" text="Hugo Archetypes" />}} may contain templating logic.

<!--more-->

---

{{< hackcss-alert type="info" >}}
<strong>Tip:</strong> This message appears below a {{< external href="https://gohugo.io/content-management/summaries/#manual-summary-splitting" text="Manual Summary Split" />}}.
{{< /hackcss-alert >}}

The above tip uses a shortcode called [Alert](http://localhost:1414/shortcode/alert/). In addition to a number of [Shortcodes](http://localhost:1414/shortcode/) After Dark provides a number of other [Features](http://localhost:1414/feature/).

The [Module System](http://localhost:1414/feature/module-system/), for example, provides a module to display image animations with alpha transparency and something not possible using a GIF:

![BPG animation example](/bpg/cinemagraph-6.bpg)

If you do not see the above animation, you may install the [Fractal Forest](http://localhost:1414/module/fractal-forest/) module yourself or reinstall After Dark using [Quick Install](http://localhost:1414/feature/quick-install/) for instant setup.

Review the [Online Help](http://localhost:1414/) to learn about other useful features such as the [Section Menus](http://localhost:1414/feature/section-menu) navigational aid, responsive [Post Images](http://localhost:1414/feature/post-images/"), offline [Fuzzy Search](http://localhost:1414/feature/fuzzy-search/) and more.

If online help isn't running, go ahead and start it using the corresponding command from the following cheat sheet within your site directory:

```sh
# After Dark scripts
./themes/after-dark/bin/upgrade # check for updates and upgrade
./themes/after-dark/bin/help # start online help docs
./themes/after-dark/bin/install # run the quick installer

# Hugo commands
hugo # build site with default settings
hugo --minify # build with minified sources (hugo 0.47 and above)
hugo --config config.prod.toml # build with custom config
hugo --templateMetrics # generate template metrics
hugo new about.md # generate page content
hugo new post/coming-soon.md # generate new post content
hugo serve # serve locally with default settings
hugo serve --buildDrafts --navigateToChanged # serve with drafts for editing
hugo serve --buildExpired # serve locally showing expired content
hugo serve --disableLiveReload # serve locally w/live reload disabled
hugo list drafts # list draft content
hugo list expired # list expired content
hugo list future # list future content
hugo [serve] --debug # build or serve hugo with debug info
hugo [command] --help
```

Thank you for choosing After Dark.
