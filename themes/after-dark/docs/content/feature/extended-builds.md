+++
title = "Extended Builds"
description = "Build Hugo with Sass and Go CDK Deploy support."
categories = ["core"]
tags = ["docker", "container", "sass", "cloud", "ci"]
features = ["code highlighter", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019, 2020"
  license = "agpl-3.0-or-later"
+++

After Dark ships with the ability to build Hugo from tagged-version source. Supply a version tag and let Docker Machine build you a high-performance extended Hugo build with integrated Sass and Go CDK deployment support.

To use install Docker then run the following command:

```sh
cd after-dark/docker/hugo && docker build .
```

Build container uses Alpine and includes `musl-dev` for high-performance. Update the `HUGO_VERSION` to get a specific Hugo release built. Upon successful build extract the resulting `hugo` binary out of the scratch container like:

```sh
docker create -it --name temp f2b785583ce8 sh && \
sudo docker cp temp:/usr/local/bin/hugo /usr/local/bin && \
docker rm -fv temp
```

Where `f2b785583ce8` is the scratch container's Image ID and `/usr/local/bin` is the destination on the host. Place executable in most appropriate directory.

For builds without Sass support enabled turn off `CGO_ENABLED`, pass in a phony value to `BUILD_TAGS`, create another build and give it a docker tag:

```sh
docker tag $(docker images -q | head -n 1) gohugoio/hugo:v0.61.0
```

It's recommended at least 2GB of storage space is available when running builds. The resulting binary inside the scratch container is less than 50MB.
