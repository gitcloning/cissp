+++
title = "Code Analysis"
description = "Test generated website HTML for problems."
categories = ["experience"]
tags = ["docker", "container", "cloud", "ci", "go", "robots"]
features = ["code highlighter", "related content", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark includes a source build of {{< external "https://github.com/wjdp/htmltest" "htmltest" />}} which may be used to analyze HTML generated for problems such as linkrot, meta attributes and more.

Code analysis is ideal for identifying potential 404 errors and determining when to link to the archived version of an external page which has gone offline.

To use install Docker then run the following command:

```sh
cd after-dark/docker/htmltest && docker build --rm .
```

Build container uses Alpine and includes `musl-dev` for high-performance. Update the `HTMLTEST_VERSION` to get a specific release built. Upon successful build extract the resulting binary out of the scratch container like:

```
docker create -it --name temp f2b785583ce8 sh && \
sudo docker cp temp:/htmltest /usr/local/bin && \
docker rm -fv temp
```

Where `f2b785583ce8` is the scratch container’s Image ID and `/usr/local/bin` is the destination on the host. Place executable in most appropriate directory.

If using Hugo `0.56.x` or higher may also possible to include `htmltest` as a Go module using {{< external "https://gohugo.io/hugo-modules/" "Hugo Modules" />}} if your particular use case calls for it.

See {{< external "https://github.com/wjdp/htmltest" "htmltest" />}} for documentation and usage.
