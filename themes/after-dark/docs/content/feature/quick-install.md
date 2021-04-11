+++
title = "Quick Install"
description = "One command is all you need to start a new website."
categories = ["core"]
tags = ["setup", "installation", "scripts"]
features = ["code highlighter", "snippets", "related content"]
aliases = [
  "/feature/quick-installer/"
]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

{{< hackcss-alert type="success" >}}
{{< highlight shell >}}wget -qO - https://go.habd.as/after-dark | sh{{< /highlight >}}
{{< /hackcss-alert >}}

Run the above command in a terminal emulator after {{< external href="https://gohugo.io/getting-started/installing" text="installing Hugo" />}} to start a new website in 5-10 seconds. Hugo version `0.51` or greater required.

---

After Dark includes a portable installation script for quick set-up. Please install {{< external href="https://gohugo.io" text="Hugo" />}} `0.51` or greater before running:

{{< hackcss-alert >}}
<details itemscope itemtype="https://schema.org/SoftwareSourceCode">
<summary>Expand to view script</summary>
{{< highlight sh "linenos=inline" >}}
{{< include "themes/after-dark/bin/install" >}}
{{< /highlight >}}
<link itemprop="codeRepository" href="https://git.habd.as/comfusion/after-dark">
<meta itemprop="codeSampleType" content="script">
<meta itemprop="programmingLanguage" content="sh">
<meta itemprop="runtimePlatform" content="busybox">
<link itemprop="targetProduct" href="https://after-dark.habd.as">
<meta itemprop="accessMode" content="textual">
</details>
{{< /hackcss-alert >}}

<!--more-->

Script has been tested on GNU/Linux, BSD (Darwin) and Windows via {{< external href="http://cmder.net" text="Cmder" />}}.

{{% hackcss-alert type="warning" %}}**Warning:** Examine scripts downloaded from the Internet before running them.{{% /hackcss-alert %}}

Here are three methods for downloading and running:

1. Download and pipe to `sh` directly:

    {{< hackcss-alert >}}
    {{< highlight shell >}}wget -qO - https://go.habd.as/after-dark | sh{{< /highlight >}}
    {{< /hackcss-alert >}}

2. Download into new file, `chmod` and execute:

    {{< hackcss-alert >}}
    {{< highlight shell >}}curl -O https://cdn.jsdelivr.net/npm/after-dark@latest/bin/install && \
chmod +x install && ./install{{< /highlight >}}
    {{< /hackcss-alert >}}

3. From canonical `git` clone:

    {{< hackcss-alert >}}
    {{< highlight shell >}}# clone source and change to source directory
git clone https://git.habd.as/comfusion/after-dark.git && cd "$_"

# use npm cli to get the release hash
echo "${$(npm run integrity)#*sha512-}"

# run quick install after validating
./bin/install
{{< /highlight >}}
    {{< /hackcss-alert >}}

Script should complete in 5-10 seconds resulting in a sample site and help docs:

{{< figure alt="After Dark screenshots"
  src="/images/quick-install.png"
  lqipsrc="/images/quick-install-fs8.png"
  caption="After Dark Quick Install running to completion in Terminal on Deepin Manjaro."
>}}

Your new site will be called `flying-toasters`. Change it to the name of your project anytime you like. Access site by navigating to https://localhost:1313.

# Multi-site Configuration (Advanced)

After Dark enables multi-site management from a single installation. To manage multiple websites use the `-c` and `-d` flags to specify the `content` and `destination` directories, respectively.

For example, to generate an audio site using the current After Dark installation create an executable script to generate the site:

{{< hackcss-card header="flying-toasters/bin/gen-audio-site" >}}
{{< highlight shell >}}#!/bin/sh
hugo -c sites/audio -d public/static.domain.example{{< /highlight >}}
{{< /hackcss-card >}}

Where `audio` contains the content for that site:

```
├── layouts
├── sites
│   └── audio
│       ├── audiobooks
│       │   ├── gaining-currency.md
│       │   └── the-power-of-now.md
│       └── clips
│           └── war-of-the-worlds.md
├── static
```

And `public` contains a folder for each site:

```
public
└── static.domain.example
    ├── categories
    │   └── index.xml
    ├── audiobooks
    │   └── index.html
    ├── clips
    │   └── index.html
    ├── css
    ├── index.html
    ├── index.xml
    ├── js
    ├── sitemap.xml
    └── tags
        └── index.xml
```

And create another script to serve the content for editing:

{{< hackcss-card header="flying-toasters/bin/serve-audio-site" >}}
{{< highlight shell >}}#!/bin/sh
hugo -c sites/audio{{< /highlight >}}
{{< /hackcss-card >}}

Each subdirectory of `public` then becomes an independent, deployable website and exact copy save for destination content generated.

{{% hackcss-alert type="info" %}}**Tip:** For additional flexibility type `hugo --help` and modify your scripts using the `--theme` and `--config` flags.{{% /hackcss-alert %}}

Multi-site is perfect for maintaining a consistent look-and-feel across multiple domain origins while limiting the need to run the [Upgrade Script](/feature/upgrade-script/) for each site.
