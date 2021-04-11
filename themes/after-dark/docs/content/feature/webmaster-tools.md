+++
title = "Webmaster Tools"
description = "Test and submit your site with popular search engines."
categories = ["search"]
tags = ["SEO", "robots", "metadata"]
features = ["code highlighter", "related content", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

## Webmaster verification

Use homepage `meta` to verify your site with Google, Bing, Alexa and Yandex. All verifications are optional and some providers allow you to [submit manually](#submit-manually).

To verify with `meta` add the following to your {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}} and fill in the value provided to you by the search engine webmaster console or similar:

```toml
[params.seo.webmaster_verifications]
  google = "" # Optional, see https://search.google.com/search-console
  bing = "" # Optional, see https://www.bing.com/toolbox/webmaster/
  yandex = "" # Optional, see https://webmaster.yandex.com/
  alexa = "" # Optional, claiming retired (see note below)
```

{{< hackcss-alert type="info" >}}
<strong>Note:</strong> Claiming your site with Alexa {{< external text="was retired" href="https://support.alexa.com/hc/en-us/articles/219135887-Claiming-has-been-retired-May-2016" />}} in May 2016.
{{< /hackcss-alert >}}

You may later remove verifications you no longer need or decide not to use.

### Submit manually

Manually submit your Sitemap for search indexing:

{{< hackcss-form target="_blank" action="https://www.google.com/webmasters/tools/ping" >}}
  {{< hackcss-formgroup >}}
    {{< hackcss-label for="google" text="Google:" />}}
    {{< hackcss-textinput id="google" name="sitemap" placeholder="https://domain.example/sitemap.xml" >}}
  {{< /hackcss-formgroup >}}
{{< /hackcss-form >}}
{{< hackcss-form target="_blank" action="https://bing.com/webmaster/ping.aspx" >}}
  {{< hackcss-formgroup >}}
    {{< hackcss-label for="bing" text="Bing:" />}}
    {{< hackcss-textinput id="bing" name="siteMap" placeholder="https://domain.example/sitemap.xml" >}}
  {{< /hackcss-formgroup >}}
{{< /hackcss-form >}}

## Test Structured Data

To test with Yandex use their {{< external href="https://webmaster.yandex.com/tools/microtest" text="Structured data validator" />}} testing tool. For Google submit the form below with the URL you wish to test:

{{< hackcss-form target="_blank" action="https://search.google.com/structured-data/testing-tool" >}}
  {{< hackcss-formgroup >}}
    {{< hackcss-textinput type="hidden" name="hl" value="en" >}}
    {{< hackcss-label for="google" text="Test URL:" />}}
    {{< hackcss-textinput id="google" name="url" placeholder="https://domain.example/post/" >}}
  {{< /hackcss-formgroup >}}
{{< /hackcss-form >}}

Use [Ephemeral Hosting]({{< relref "ephemeral-hosting" >}}) to check your site while in development/testing.

## Test and Monitor Speed

Nobody likes a slow website. Benchmark and analyze performance from various locations worldwide using {{< external href="https://tools.pingdom.com" text="Pingdom Tools" />}} and {{< external "https://webpagetest.org" />}} for free.

Monitor performance over time using {{< external href="https://speedtracker.org" text="SpeedTracker" />}}.

## Additional services

- {{< external "https://webmaster.yandex.com/tools/robotstxt/" />}}
- {{< external "https://w3c.github.io/developers/tools/" />}}
