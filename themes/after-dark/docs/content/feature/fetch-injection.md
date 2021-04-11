+++
title = "Fetch Injection"
description = "Load external scripts and styles with incredible speed."
categories = ["experience"]
tags = ["performance", "styles"]
features = ["snippets", "related content", "code highlighter"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark uses the {{< external rel="external help" href="https://git.habd.as/jhabdas/fetch-inject" text="Fetch Inject" />}} library to load and execute external scripts and styles faster than browsers are capable of otherwise.

{{< external href="https://hackcabin.com/post/managing-async-dependencies-javascript/" text="Fetch Injection" />}} was conceptualized and developed for After Dark to make it possible to deep-link to full-sized [Image Gallery](/module/hall-of-mirrors) images without blocking page load and has other performance applications:

<table>
  <thead>
    <tr>
      <th rowspan="2" scope="col">Use Case</th>
      <th colspan="2" scope="col">Chrome Performance Comparison (4G simulated connection speed)</th>
    </tr>
    <tr>
      <th scope="col">Without Fetch Inject</th>
      <th scope="col">With Fetch Inject</th>
    </tr>
  </thead>
  <tbody>
    <td>{{< external href="https://habd.as/talks/screaming-fast-wordpress-redis-vultr/" text="WordPress Twenty Seventeen" />}}</td>
    <td>~3.600s</td>
    <td>~0.918s</td>
  </tbody>
</table>

Use Fetch Inject in your [Custom Layouts](../custom-layouts) to load scripts and styles cross-origin or from your site `static` directory.

Given the following `static` folder contents:

```
├── layouts
├── static
│   ├── js
│   │   ├── jquery.slim.min.js
│   │   ├── tether.min.js
│   │   └── bootstrap.min.js
│   └── css
│       └── font-awesome.min.css
└── themes
```

You can load Bootstrap (w/Font Awesome) and show how long ago it finished:

{{< highlight html "linenos=inline" >}}
<script>
  fetchInject([
    'https://cdn.jsdelivr.net/lodash/latest/lodash.min.js',
    'https://cdn.jsdelivr.net/momentjs/latest/moment.min.js'
  ])
  .then(() => {
    const start = moment();
    fetchInject(['/js/bootstrap.min.js'],
      fetchInject([
        '/js/jquery.slim.min.js',
        '/js/tether.min.js',
        '/css/font-awesome.min.css'
      ])
    ).then(console.log(`Bootstrap Loaded: ${_.capitalize(start.toNow())}.`));
  });
</script>
{{< /highlight >}}

Fetch Inject is 555 bytes compressed, non-blocking and included by default in [Custom Layouts](../custom-layouts). Visit the {{< external href="https://codepen.io/jhabdas/pen/MpVeOE?editors=0012" text="CodePen Playground" />}} to try it out.
