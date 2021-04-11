+++
title = "Online Help"
description = "Complete self-hosted help guide and example website."
categories = ["core"]
tags = ["scripts", "security", "networking"]
features = ["related content", "code highlighter", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark includes an extensive online help manual and example website.

View help docs locally by navigating to http://localhost:1414 following a [Quick Install](../quick-install) or after running the [Upgrade Script](../upgrade-script). Internet connection not required.

If help is not running you may start it anytime via script:

{{< hackcss-alert >}}
{{< highlight sh >}}
cd flying-toasters && \
./themes/after-dark/bin/help
{{< /highlight >}}
{{< /hackcss-alert >}}

Or simply create an alias and serve docs with live-reload:

{{< hackcss-alert >}}
{{< highlight sh >}}
alias hs='hugo serve --navigateToChanged' && \
hs --port 1414 --source themes/after-dark/docs
{{< /highlight >}}
{{< /hackcss-alert >}}

Help is included within the After Dark source code. So each new release will include the latest help docs, specific to that particular version.

Upgrade to get the latest updates using the [Upgrade Script](../upgrade-script/).
