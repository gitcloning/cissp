+++
title = "Content Security Policy"
description = "Control resources the user agent is allowed to load."
categories = ["security"]
tags = ["privacy", "xss", "csp"]
features = ["code highlighter", "related content", "snippets"]
[blackfriday]
  smartypants = false
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark helps you secure your site using Content Security Policy (CSP). Basic CSP is enabled by default and [Advanced Configurations]({{< relref "#advanced-configuration" >}}) are also possible.

Basic CSP offers minimal protection but is still helpful as it keeps resources from accidentally being loaded over `http`. In addition, Basic CSP automatically blocks all Flash and Silverlight objects before they have a chance to load.

## Basic Configuration

Disable CSP site-wide add the following to your site config:

```toml
[params]
  disable_csp = true # disable site-wide
```

Disable CSP for a specific page using front matter:

```toml
disable_csp = true # disable for page
```

## Advanced Configuration

Advanced configuration allows you to fine-tune policy directives based on your specific needs. To get started specify at least 1 CSP directive in site config.

{{% hackcss-alert type="info" %}}**Note:** You may wish to {{< external "https://gohugo.io/getting-started/usage/#disable-livereload" "Disable LiveReload" />}} while defining advanced config.{{% /hackcss-alert %}}

Define the {{< external "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src" "script-src" />}} directive site-wide:

```toml
[params.security.csp.directives]
  scriptSrc = [
    "'self'",
    "'unsafe-inline'",
    "https:",
    "'sha512-Jx/MqTxYWqHdoOkHItRJJZCvFDhERPr5gG4I5ESu3V+BgQyAQ6wXfdsGzhzmT0yyvkAWz2jbrn81q90RRJTSTg=='",
    "'sha512-hno7WeTIciCJSjg/myjyK30HYkrcGCVwo4g4SpUalvrs3r2lS7bPNIQwbCNypKbg7BZ1sA4AsGnk6Gq4NOKpGA=='",
    "'sha512-ISTAV0GadOIz/NXXHOS&+eCM0ysXVVHhQTlvA6LJxz/DeA5yIxm0Vqf5IE&+WH0yuuXkayAKtoZkQ326nch5f/fg=='",
    "'strict-dynamic'"
  ]
```

This will override the `script-src` directive's advanced default:

Directive | Mapping | Advanced Default
--- | --- | ---
default-src | defaultSrc | 'none'
connect-src | connectSrc | 'self'
worker-src | workerSrc | 'self'
font-src | fontSrc | 'self'
media-src | mediaSrc | 'self'
img-src | imgSrc | 'self' data:
script-src | scriptSrc | 'none'
style-src | styleSrc | 'self' 'unsafe-inline'
frame-src | frameSrc | 'self'
object-src | objectSrc | 'none'

Once set, view the `Content-Security-Policy` meta tag in the `head` of your page and inspect the console for errors as you navigate to different pages. Each time you encounter an error caused by CSP is an opportunity to improve your policy.

Add page-specific directives from page front matter using the same structure and naming conventions used in site config to append items for that page:

```toml
[security.csp.directives]
  scriptSrc = [
    "'sha512-TKVuLlCT8+a0Chpa6Pw3clhu9fhZ9JOzgblgxQaUQVP/z4lfPnrdyWDOgucORnS2qapWu/iPVG2d0ywyGH2NjA=='"
  ]
```

{{% hackcss-alert type="info" %}}**Note:** Page-specific directives _will not_ override any site-wide setting and will not apply without first overriding its advanced default via site config.{{% /hackcss-alert %}}

Continue overriding advanced defaults as necessary until all CSP errors are resolved or you're satisfied with the changes.

## Additional Resources

- About {{< external "https://infosec.mozilla.org/guidelines/web_security#content-security-policy" "Content Security Policy" />}}
- Test policy with {{< external "https://observatory.mozilla.org" "Observatory by Mozilla" />}}
- See {{< external "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#Examples" "CSP examples" />}} to learn more
