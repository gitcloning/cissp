+++
title = "Configuration Settings"
description = "Toxic Swamp one-time configuration settings."
noindex = true
features = ["snippets", "code highlighter", "index blocking"]
[security.csp.directives]
  scriptSrc = [
    "'sha512-ZcJCmjpwoDxVbrP6iOEsmJC7fC6I0nq6bSOjjbGkrbSE7mtb0647MoQa+Wbxa8fkTUqhUYkfVY/oduanSklU9g=='"
  ]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

<section class="js-toshow" style="display:none">
  {{< hackcss-button type="info" isghost="true" onclick="print()" >}}
    <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M7 25 L2 25 2 9 30 9 30 25 25 25 M7 19 L7 30 25 30 25 19 Z M25 9 L25 2 7 2 7 9 M22 14 L25 14" />
    </svg>
  {{< /hackcss-button >}}

  You may print this page. If you refresh you will lose your settings.
</section>

Add the following to your site config:

<section class="js-tohide">
  {{% hackcss-card header="config.toml" %}}[Generate Config](../#config-generator) to view config settings.{{% /hackcss-card %}}
</section>

<section class="js-toshow" style="display:none">
  {{< hackcss-card header="config.toml" >}}
{{< highlight toml "linenos=inline,linenostart=36" >}}
[params.modules.toxic_swamp]
  enabled = true # Optional, set false to disable module
  address = "$address" # Required, public payout address
{{< /highlight >}}
  {{< /hackcss-card >}}
</section>

<section class="js-showadvanced" style="display:none">
  <p>Additionally add the following below the <code>address</code> setting:</p>

{{< hackcss-card header="config.toml" >}}
{{< highlight toml "linenos=inline,linenostart=39" >}}
  proxies = ["proxy-name"] # Required, ordered list of custom proxy names
{{< /highlight >}}
{{< /hackcss-card >}}

  <p>And create <code>proxies.toml</code> in your site <code>data</code> directory:</p>

{{< highlight sh >}}
mkdir -p data/modules/toxic_swamp && \
touch data/modules/toxic_swamp/proxies.toml
{{< /highlight >}}

  <p>With the following file contents:</p>

  {{< hackcss-card header="data/modules/toxic_swamp/proxies.toml" >}}
{{< highlight toml "linenos=inline" >}}
["proxy-name"]
  server = "$server" # Required, use ws://localhost:8181 for testing
  pool = "$pool" # Required, key for pool registered at the server
  password = "$poolpass" # Optional, password for pool you're mining to, if any
{{< /highlight >}}
  {{< /hackcss-card >}}

  <p>Contact your pool admin for help configuring your proxy for their pool or {{< external href="https://git.habd.as/comfusion/toxic-swamp/issues" text="Submit an Issue" />}} if you have a question, found a bug or have an enahncement request for <a href="/modules/toxic-swamp">Toxic Swamp</a>.</p>
</section>

<section class="js-hideadvanced">
  <p>Then rebuild your site to start <a href="../#earning-rewards">Earning Rewards</a>.
</section>
