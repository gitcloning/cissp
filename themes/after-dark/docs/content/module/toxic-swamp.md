+++
title = "Toxic Swamp"
slug = "toxic-swamp"
description = "Monero/Aeon Web Miner add-on module for After Dark."
summary = "Monero/Aeon Web Miner."
categories = ["addon"]
tags = ["module", "monetization", "rewards", "cryptocurrency"]
features = ["snippets", "related content"]
[security.csp.directives]
  scriptSrc = [
    "'sha512-TKVuLlCT8+a0Chpa6Pw3clhu9fhZ9JOzgblgxQaUQVP/z4lfPnrdyWDOgucORnS2qapWu/iPVG2d0ywyGH2NjA=='"
  ]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Monetize attention in one of more than 40 cryptocurrency mining pools with support for the March 2019 Monero hard fork.

{{< hackcss-alert >}}
  {{< video controls="true" src="https://habd.as/code/toxic-swamp/assets/toxic-swamp-demo.mp4" preload="auto" poster="https://habd.as/code/toxic-swamp/images/after-dark-v6.15.0-homepage-fs8.png" width="100%" >}}
{{< /hackcss-alert >}}

# Features

- Mine cryptocurrency while visitors browse your sites
- Reward effort during site development and publishing
- Transparent, unobtrusive multilingual user interface
- Does not use cookies or connect to any third-parties
- Obfuscates end-user IPs and other connection details
- Automatically starts when external power is detected
- Suspends operation during loss of power or attention
- Optimized for low-bandwidth high-latency connections
- Cannot be detected by MinerBlock extension at 1.2.12

# Installation

Choose a module download source:

- {{< external "https://www.npmjs.com/package/toxic-swamp" />}} - npm
- {{< external "https://www.jsdelivr.com/package/npm/toxic-swamp" />}} - cdn
- {{< external "https://git.habd.as/comfusion/toxic-swamp" />}} - git

Extract module contents into site themes directory:

```
├── static
└── themes
    ├── after-dark
    └── toxic-swamp
```

Verify [Release Hash]({{< relref "release-hashes" >}}) and GPG signature:

```sh
cd themes/toxic-swamp && \
npm install && npm run integrity && \
git tag --verify v1.0.0-beta.28
```

Specify module in site config:

{{< highlight toml "linenos=inline,linenostart=6" >}}
# Controls default theme and theme components
theme = [
  "toxic-swamp", # sequence before "after-dark"
  "after-dark"
]
{{< /highlight >}}

Configure with payout address to start earning rewards:

{{< highlight toml "linenos=inline,linenostart=36" >}}
[params.modules.toxic_swamp]
  enabled = true # Optional, set false to disable module
  address = "your-address-here"
{{< /highlight >}}

# Earning Rewards

Using [The Fire Swamp](#the-fire-swamp) with a configured payout address, you may view your hash metrics and payout information from the {{< external href="https://moneroocean.stream/?dark#/dashboard" text="MoneroOcean Dashboard" />}}:

{{< figure alt="MoneroOcean Dashboard screenshots"
  src="/images/screenshots/monero-ocean-dashboard-fs8.png"
  caption="Monero Ocean Dashboard showing Toxic Swamp mining activity."
>}}

See the MoneroOcean {{< external href="https://moneroocean.stream/?dark#/help/faq" text="FAQ" />}} for more details.

# The Fire Swamp

After Dark provides upgrade incentives The Fire Swamp using {{< external href="https://moneroocean.stream/?dark" text="MoneroOcean" />}} to help you get started and as a fallback when custom proxies fail to connect.

The proxy servers are located at `fs*.habd.as:80` and will be used by default until you [Create Your Own Proxy](#create-your-own-proxy) or fall more than two major versions behind.

To maximize your rewards while using the Fire Swamp proxy you must try to keep your After Dark version up-to-date as illustrated here:

<style>
  .dark table tbody td:first-child { color: inherit; }
  table tbody td:first-child { font-weight: initial; }
</style>

<table>
  <caption>Figure 1: Fire Swamp upgrade incentive based on After Dark version</caption>
  <thead>
    <tr>
      <th scope="col">Latest Version</th>
      <th scope="col">Your Version</th>
      <th scope="col">Upgrade Incentive</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.0.0</td>
      <td>7.0.0</td>
      <td>None</td>
    </tr>
    <tr>
      <td>7.0.2</td>
      <td>7.0.1</td>
      <td>2.2%</td>
    </tr>
    <tr>
      <td>7.1.0</td>
      <td>7.0.2</td>
      <td>13.6%</td>
    </tr>
    <tr>
      <td>8.0.0</td>
      <td>7.1.0</td>
      <td>34.1%</td>
    </tr>
  </tbody>
</table>

To describe in more detail:

- If a bugfix, documentation update, refactoring or other patch release occurs your upgrade incentive is 2.2% of your total combined mining hash power.

- If an enhancement, feature or other minor release occurs your upgrade incentive is 13.6% of your total combined mining hash power.

- If a breaking change, license update or other major release occurs your upgrade incentive is 34.1% of your total combined mining hash power.

- If you fall more than one point release behind any minor or patch release the upgrade incentive will remain the same as if you were only one release behind.

- If you fall more than two majors behind your miner may continue to function but you will be required to upgrade to maintain your upgrade incentive.

Maximize your incentive with reduced effort by using the [Upgrade Script](/feature/upgrade-script/) to  check for and automatically update After Dark to the latest available version.

{{< hackcss-alert type="success" >}}
  <strong>Tip:</strong> After Dark uses {{< external href="https://semver.org" text="Semantic Versioning" />}} and the <code>latest</code> version may be tracked programmatically using on the NPM registry and in JSON form {{< external href="https://registry.npmjs.org/-/package/after-dark/dist-tags" text="here" />}}.
{{< /hackcss-alert >}}

{{< hackcss-alert type="info" >}}
  <strong>Note:</strong> After Dark updates are typically backwards compatible with existing modules though there may be cases where module updates are required.
{{< /hackcss-alert >}}

# Create Your Own Proxy

Advanced users may wish to configure their own proxy servers. To do so select <samp>Advanced Settings</samp> when generating configuration after standing-up your proxy server described in more detail here:

<details>
<summary>Expand to view details</summary>

Use the instructions in {{< external "https://git.habd.as/comfusion/webminerpool" />}} to stand up your own proxy server and reference the following to understand connection activity:

<style>
  table { caption-side: bottom; }
  caption { margin-top: 0.5rem; font-variant: all-small-caps; }
  dd, dt { display: inline-block; }
  dt { margin-left: 3rem; }
  dd { width: 10rem; }
</style>
<table>
  <legend>
    Legend
    <dl>
      <dt>A<dd>Active
      <dt>I<dd>Inactive
      <dt>S<dd>Standby
      <dt>E<dd>Error
      <dt>O<dd>Open
      <dt>C<dd>Closed
      <dt>K<dd>Known
      <dt>U<dd>Unknown
    </dl>
  </legend>
  <caption>Figure 2: Miner connection activity by device, proxy and toolbar state</caption>
  <thead>
    <tr>
      <th colspan="3" scope="col">Device</th>
      <th colspan="3" scope="col">Toolbar</th>
      <th colspan="4" scope="col">Miner</th>
      <th colspan="3" scope="col">Proxy</th>
    </tr>
    <tr>
      <th scope="col">Charging</th>
      <th scope="col">Online</th>
      <th scope="col">Cores</th>
      <th scope="col">Visible</th>
      <th scope="col">Powered</th>
      <th scope="col">Throttle</th>
      <th scope="col">Status</th>
      <th scope="col">Socket</th>
      <th scope="col">Workers</th>
      <th scope="col">Load</th>
      <th scope="col">Online</th>
      <th scope="col">Pool</th>
      <th scope="col">Allow</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>Off</td>
      <td>--</td>
      <td>I</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>Yes</td>
      <td>Yes</td>
      <td>8</td>
      <td>No</td>
      <td>On</td>
      <td>Any</td>
      <td>S</td>
      <td>C</td>
      <td>8</td>
      <td>0</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>Yes</td>
      <td>No</td>
      <td>8</td>
      <td>Yes</td>
      <td>On</td>
      <td>Any</td>
      <td>S</td>
      <td>E</td>
      <td>8</td>
      <td>0</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>No</td>
      <td>Yes</td>
      <td>16</td>
      <td>Yes</td>
      <td>On</td>
      <td>25</td>
      <td>I</td>
      <td>C</td>
      <td>16</td>
      <td>4</td>
      <td>Yes</td>
      <td>K</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Yes</td>
      <td>Yes</td>
      <td>16</td>
      <td>Yes</td>
      <td>On</td>
      <td>25</td>
      <td>A</td>
      <td>O</td>
      <td>16</td>
      <td>12</td>
      <td>Yes</td>
      <td>K</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Yes</td>
      <td>Yes</td>
      <td>32</td>
      <td>Yes</td>
      <td>On</td>
      <td>50</td>
      <td>A</td>
      <td>O</td>
      <td>32</td>
      <td>16</td>
      <td>Yes</td>
      <td>K</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Yes</td>
      <td>Yes</td>
      <td>32</td>
      <td>Yes</td>
      <td>On</td>
      <td>75</td>
      <td>A</td>
      <td>O</td>
      <td>32</td>
      <td>24</td>
      <td>Yes</td>
      <td>K</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Yes</td>
      <td>Yes</td>
      <td>64</td>
      <td>Yes</td>
      <td>On</td>
      <td>Any</td>
      <td>S</td>
      <td>E</td>
      <td>64</td>
      <td>0</td>
      <td>Yes</td>
      <td>U</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Yes</td>
      <td>Yes</td>
      <td>64</td>
      <td>Yes</td>
      <td>On</td>
      <td>Any</td>
      <td>S</td>
      <td>E</td>
      <td>64</td>
      <td>0</td>
      <td>No</td>
      <td>--</td>
      <td>--</td>
    </tr>
  </tbody>
</table>

Generate configuration with `Advanced Settings` specified:

{{< hackcss-card header="Interactive Config Generator" >}}
  <style>.form { width: unset; }</style>
  {{< hackcss-form name="generator" disabled="true" action="http://localhost:1414/module/toxic-swamp/configuration/" >}}
    <noscript>
      {{< hackcss-helpblock >}}
        <p>Enable JavaScript for offline config generation.</p>
      {{< /hackcss-helpblock >}}
    </noscript>
    {{< hackcss-alert type="warning" class="js-usesameorigin" >}}
      <style>.js-usesameorigin { display: none }</style>
      <strong>NOPE!</strong> Attempting to submit to unknown origin.
    {{< /hackcss-alert >}}
    {{< hackcss-alert type="warning" class="js-useonlinehelp" >}}
      Please use <a href="/feature/online-help/">Online Help</a> to generate configuration while <a href="/feature/work-offline/">Working Offline</a>.
    {{< /hackcss-alert >}}
    {{< hackcss-alert type="warning" class="js-disconnect" >}}
      <style>.js-disconnect { display: none }</style>
      Please <a href="/feature/work-offline/">Disconnect</a> from the network before generating your configuration.
    {{< /hackcss-alert >}}
    {{< hackcss-formgroup name="addressgroup" >}}
      {{< hackcss-label for="address" >}}
        <abbr title="Monero">XMR</abbr> Address:
      {{< /hackcss-label >}}
      {{< hackcss-textinput
          required="true"
          disabled="true"
          type="text" id="address" name="address"
          placeholder="44ky1q4d..."
          pattern="^4[0-9AB][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{93}$"
      >}}
      {{< hackcss-helpblock >}}
        Enter payout address. {{< external href="https://getmonero.org/resources/user-guides/securely_purchase.html" >}}Create Secure Wallet{{< /external >}}.
      {{< /hackcss-helpblock >}}
    {{< /hackcss-formgroup >}}
    {{< hackcss-buttongroup formactions="true" >}}
      {{< hackcss-button class="muted" name="generate" type="success" text="Generate Config" disabled="true" />}}
    {{< /hackcss-buttongroup >}}
    <details>
      <summary>Advanced Settings</summary>
      <p>Optional. <a href="#create-your-own-proxy">Create Your Own Proxy</a> before using.</p>
      {{< hackcss-formgroup name="servergroup" >}}
        {{< hackcss-label for="server" text="Proxy Server:" />}}
        {{< hackcss-textinput type="url" id="server" name="server" placeholder="wss://domain.example:80" >}}
        {{< hackcss-helpblock >}}
          Web Socket URL for custom proxy server.
        {{< /hackcss-helpblock >}}
      {{< /hackcss-formgroup >}}
      {{< hackcss-formgroup name="poolgroup" >}}
        {{< hackcss-label for="pool" text="Mining pool:" />}}
        {{< hackcss-select id="pool" name="pool" >}}
          <option>moneroocean.stream</option>
          <option>etn.nanopool.org</option>
          <option>monero.hashvault.pro</option>
          <option>minemonero.pro</option>
          <option>moneroocean.stream:100</option>
          <option>aeon-pool.com</option>
          <option>aeon-pool.sytes.net</option>
          <option>aeonpool.xyz</option>
          <option>trtl.flashpool.club</option>
          <option>aeonpool.dreamitsystems.com</option>
          <option>clawde.xyz</option>
          <option>xmr.prohash.net</option>
          <option>aeon.uax.io</option>
          <option>aeonpool.net</option>
          <option>xmrminerpro.com</option>
          <option>minercircle.com</option>
          <option>xmrpool.net</option>
          <option>supportaeon.com</option>
          <option>usxmrpool.com</option>
          <option>aeonminingpool.com</option>
          <option>supportxmr.com</option>
          <option>aeonhash.com</option>
          <option>minexmr.com</option>
          <option>pooltupi.com</option>
          <option>xmrpool.eu</option>
          <option>slowandsteady.fun</option>
          <option>etn.hashvault.pro</option>
          <option>poolmining.org</option>
          <option>aeon.rupool.tk</option>
          <option>aeon.semipool.com</option>
          <option>etn.spacepools.org</option>
          <option>osiamining.com</option>
          <option>durinsmine.com</option>
          <option>dwarfpool.com</option>
          <option>arhash.xyz</option>
          <option>xmr.nanopool.org</option>
          <option>aeon.hashvault.pro</option>
          <option>minereasy.com</option>
          <option>moneropool.com</option>
          <option>aeon.n-engine.com</option>
          <option>aeon.sumominer.com</option>
          <option>monerohash.com</option>
          <option>monero.crypto-pool.fr</option>
        {{< /hackcss-select >}}
        {{< hackcss-helpblock >}}
          Select a {{< external href="https://git.habd.as/comfusion/webminerpool/src/branch/master/server/pools.json" text="supported pool" />}} to mine with.
        {{< /hackcss-helpblock >}}
      {{< /hackcss-formgroup >}}
      {{< hackcss-formgroup name="poolpassgroup" >}}
        {{< hackcss-label for="poolpass" text="Password:" />}}
        {{< hackcss-textinput type="password" id="poolpass" name="poolpass" >}}
        {{< hackcss-helpblock >}}
          Password for your pool. Often not needed.
        {{< /hackcss-helpblock >}}
      {{< /hackcss-formgroup >}}
      {{< hackcss-formgroup name="throttlegroup" >}}
        {{< hackcss-label for="throttle" text="Throttle:" />}}
        {{< hackcss-textinput type="number" id="throttle" name="throttle" placeholder="Use 90 for 10% capacity" step="5" min="70" max="90" >}}
        {{< hackcss-helpblock >}}
          Override default of 70 (30% capacity).
        {{< /hackcss-helpblock >}}
      {{< /hackcss-formgroup >}}
      {{< hackcss-formgroup name="useridgroup" >}}
        {{< hackcss-label for="userid" text="User Id:" />}}
        {{< hackcss-textinput type="text" id="userid" name="userid" placeholder="Any string with a length < 200 characters" maxlength="200" >}}
        {{< hackcss-helpblock >}}
          Combine hash metrics for all users.
        {{< /hackcss-helpblock >}}
      {{< /hackcss-formgroup >}}
    </details>
  {{< /hackcss-form >}}
{{< /hackcss-card >}}

Enable debugging to output detailed socket messages from the proxy to the browser console by adding the following to your site config:

```toml
[params.modules.toxic_swamp]
  debugging = true
```

</details>

# Internationalization

English translations available for toolbar display:

- Indonesian (id)
- Russian (ru)
- Greek (el)
- German (de)
- Polish (pl)
- Italian (it)

Enable them with module `translations` whitelist:

```toml
[params.modules.toxic_swamp]
  translations = ["id", "ru", "el", "de", "pl", "it"] # English translations enabled
```

Use `languageCode` site config to control which is displayed:

```toml
languageCode = "en-US" # English (United States) or English by default
languageCode = "id-ID" # Indonesian (Indonesia) or Indonesian, if available
languageCode = "ru-RU" # Russian (Russia) or Russian, if available
languageCode = "el-GR" # Greek (Greece) or Greek, if available
languageCode = "de-DE" # German (Germany) or German, if available
languageCode = "pl-PL" # Polish (Poland) or Polish, if available
languageCode = "it-IT" # Italian (Italy) or Italian, if available
```

{{< hackcss-alert type="info" >}}
<strong>Note:</strong> Language tag syntax is defined by the <abbr title="Internet Engineering Task Force">IETF</abbr>'s {{< external href="https://tools.ietf.org/html/bcp47" text="BCP 47" />}}.
{{< /hackcss-alert >}}

Modify translations from `inline.jsonld.html` in your site `layouts` directory. If the file doesn't exist yet, copy it from module default:

```sh
mkdir -p layouts/partials/modules/toxic-swamp/ && \
cp themes/toxic-swamp/layouts/partials/modules/toxic-swamp/inline.jsonld.html $_
```

Remove config and customizations to return to module defaults.
