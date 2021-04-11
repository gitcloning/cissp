+++
title = "Release Hashes"
description = "Verify you are using genuine After Dark software."
categories = ["security"]
tags = ["validate", "privacy", "security", "cryptography", "npm", "git"]
features = ["code highlighter", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark utilizes the {{< external href="https://www.npmjs.com" text="NPM" />}} CLI to produce a unique cryptographic hash each release, enabling any copy to be uniquely identified regardless of its source.

Release hashes use the <abbr title="Secure Hashing Algorithm">SHA-512</abbr> algorithm and look like this:

{{< hackcss-alert type="success" >}}
<samp>VWcn7AxXUkZRGsRIM/6A5RjqW7DOPH+XbnLGRp7hpr0TCH/9l31ug2h2JaIlEvsDzOPRcZDBdyZvJ4mSm/Rqjg==</samp>
{{< /hackcss-alert >}}


Each release a new hash is generated in the following locations:

- Embedded using PGP in the {{< external href="https://git.habd.as/comfusion/after-dark/releases" text="release source" />}} `git tag` message.
- Codified into the {{< external href="https://registry.npmjs.org/after-dark/latest" text="latest" />}} or {{< external href="https://registry.npmjs.org/after-dark/6.7.9" text="version-specific" />}} NPM package metadata.
- Embedded inside the After Dark [Online Help](../online-help) documentation.

Upon receiving your copy of After Dark you may use the release hash to verify you are using an unadulterated version of the software.

Run the [Release Validator](/validate) to quickly check your release offline:

{{< hackcss-card header="Interactive Release Validator" >}}
<iframe title="Validate Release" scrolling="no" width="100%" height="360" src="/validate"></iframe>
{{< /hackcss-card >}}

For a more thorough inspection do the following:

1. Install the {{< external href="https://docs.npmjs.com/cli/npm" text="npm cli" />}} on your machine.
2. Navigate to `themes/after-dark` from within your site.
3. Run `npm i && npm run integrity` to generate your SHA-512 hash.
4. Compare your hash to the hash generated during a signed release.
5. If equal, verify the GPG signature used to sign that release.

If inspection fails run the [Upgrade Script](../upgrade-script/) and try again.
