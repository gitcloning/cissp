+++
title = "Upgrade Script"
description = "Check for After Dark updates and upgrade effortlessly."
categories = ["core"]
tags = ["updating", "installation", "scripts"]
features = ["code highlighter", "related content", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

To check for updates and automatically upgrade After Dark to the latest version simply run the upgrade script from your site directory:

```sh
cd flying toasters && \
./themes/after-dark/bin/upgrade
```

If you're already using the latest version the script will let you know:

{{< hackcss-alert type="info" >}}
<samp class="muted">Did not upgrade after-dark. Already using latest version.</samp>
{{< /hackcss-alert >}}

If an update is available the script will download and install it automatically:

{{< hackcss-alert type="info" >}}
<samp class="muted">Starting upgrade from 6.7.6 to 6.8.0 ...<br>
Version 6.8.0 downloaded to themes/after-dark<br>
Stopping help server if running ...</br>
Generating help documentation ...<br>
Upgrade complete! Please see CHANGELOG.md for changes.</samp>
{{< /hackcss-alert >}}

If current version can't be detected the script will prompt you:

{{< hackcss-alert type="info" >}}
<samp class="muted">Cannot detect version. Upgrade after-dark anyway (y/n)? y<br>
Starting upgrade from unknown version to 6.12.1 ...<br>
Version 6.12.1 downloaded to themes/after-dark<br>
Stopping help server if running ...</br>
Generating help documentation ...<br>
Upgrade complete! Please see CHANGELOG.md for changes.</samp>
{{< /hackcss-alert >}}

Like [Quick Install](../quick-install) the upgrade script is written to POSIX standard will not require additional dependencies to operate on most systems. Upon upgrade the [Release Hash](../release-hashes) will update as well so you may [Validate Release](/validate).
