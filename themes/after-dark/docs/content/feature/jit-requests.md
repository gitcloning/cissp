+++
title = "JIT Requests"
description = "Maximize resources while minimizing external requests."
categories = ["experience"]
tags = ["performance", "styles", "javascript"]
features = ["related content", "snippets", "code highlighter"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark makes <abbr title="Just-In-Time">JIT</abbr> requests for some external assets to cut down on resource consumption and increase page performance.

Take the [Code Highlighter](../code-highlighter) stylesheet for example:

{{< highlight css >}}
{{< include "themes/after-dark/static/css/syntax.css" >}}
{{< /highlight >}}

The stylesheet code shown above is itself highlighted using a JIT request. Confirm by viewing the network requests for this page and observe the `fetch` request for the `syntax.css` file as depicted here:

```sh
jit-requests (document)
├── lazysizes.min.js (fetch)
├── syntax.css (fetch)
```

Using [Fetch Injection](../fetch-injection) a JIT request is issued to begin downloading the highlighter stylesheet on-the-fly in parallel with other resources and the base layout takes care to ensure the CSS is only requested on pages that need it.

Create your own JIT requests using [Custom Layout](../custom-layouts) and [Fetch Injection](../fetch-injection).
