+++
title = "Referrer Policy"
description = "Specify how much info is passed to external links."
categories = ["security"]
tags = ["privacy", "security", "SEO", "metadata"]
features = ["related content", "code highlighter", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark adds a {{< external href="https://w3c.github.io/webappsec-referrer-policy/" text="Referrer Policy" />}} to improve site security and increase visitor privacy beyond browser defaults using a simple site-wide policy.

Adjust the site-wide default of `same-origin` from {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}}:

```toml
[params.seo]
  referrer = "same-origin"
```

Relax the security policy by:

- Adjusting the site-wide default;
- Using the `referrerpolicy` attribute of the [External Shortcode](/shortcode/external);
- Using a {{< external href="https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-delivery-nested" text="nested browsing context" />}} to adjust contextually.

See {{< external href="https://w3c.github.io/webappsec-referrer-policy/" text="Referrer Policy on W3C" />}} for a list of possible values.
