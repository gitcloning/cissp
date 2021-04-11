# Fractal Forest

> Better Portable Graphics module for [After Dark]. Fractal Forest adds support for Fabrice Bellard's [BPG Image format](https://bellard.org/bpg/).

[![Latest NPM version](https://img.shields.io/npm/v/fractal-forest.svg?style=flat-square)](https://www.npmjs.com/package/fractal-forest)
[![NPM downloads per month](https://img.shields.io/npm/dm/fractal-forest.svg?style=flat-square)](https://www.npmjs.com/package/fractal-forest)
[![Minimum After Dark version](https://img.shields.io/badge/dynamic/json.svg?url=https://git.habd.as/comfusion/fractal-forest/raw/branch/master/package.json&label=after%20dark&query=$..['after-dark']&colorB=000000&style=flat-square&longCache=false&maxAge=86400)](https://git.habd.as/comfusion/after-dark/)
[![0BSD licensed](https://img.shields.io/npm/l/fractal-forest.svg?style=flat-square&longCache=true)](https://git.habd.as/comfusion/fractal-forest/src/branch/master/COPYING)

## Setup

None required.

## Installation

1. Copy the contents of this repository into a directory called `themes/fractal-forest` under the root of your After Dark site.
2. Add `fractal-forest` as a [theme component](https://gohugo.io/themes/theme-components/) to your After Dark site `config.toml`, e.g.

    ```toml
    theme = [
      "fractal-forest",
      "after-dark"
    ]
    ```

3. Add and specify settings for the module in your After Dark site config, e.g.

    ```toml
    [params.modules.fractal_forest]
      enabled = true # Optional, set false to disable module
      decoders = [
        "bpgdec8", # 8-bit only javascript decoder without animation
        "bpgdec", # > 8-bit javascript decoder without animation
        "bpgdec8a" # 8-bit javascript decoder with animation
      ]
      crossorigin = "anonymous" # Optional, sets CORS attribute
    ```

4. Build and deploy your After Dark site.

For additional information please see [BPG Image format](https://bellard.org/bpg/).

## Development

For development, install Docker on your machine:

- [Get started with Docker for Mac](https://docs.docker.com/docker-for-mac/)
- [Get started with Docker for Windows](https://docs.docker.com/docker-for-windows/)

Then build the codecs with [`docker build`](https://docs.docker.com/engine/reference/commandline/build/).

To adjust the version of bpg used simply modify `LIBBPG_VERSION` in the `Dockerfile` for desired version and rebuild. If you're on a multicore system adjust `CPU_CORES` to decrease compilation time.

Docker build produces an intermediate container image with libbpg source and result of compilation. It also copyies the codecs into a busybox image.

To access the full `libbpg` source run:

```sh
$ docker run -it 30c982469f98
```

Where `30c982469f98` is the image id of the intermediate step.

To access just the codecs run:

```sh
$ docker run -it 712e9ce47e86
```

Where `712e9ce47e86` is the image id of the final build step.

To update the javascript decoders in `static/js/bpg` run:

```
$ docker run --rm --entrypoint tar 712e9ce47e86 cC /var/www/ . | tar xvC static/js
```

Where `712e9ce47e86` is the image id of the final build step.

Reference the [`libbpg` mirror](https://git.habd.as/jhabdas/libbpg/) for additional compilation settings, `README` and `Makefile`. See the [Docker Documentation](https://docs.docker.com) for help with Docker.

## Contributing

Please squash commits and use [Convention Commit](https://www.conventionalcommits.org/) messages. Run `npm run commit` after installing NPM dev dependencies for help creating conventional commit messages.

## Rights

Copyright (C) 2018, 2019 by Josh Habdas <jhabdas@protonmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted.

The text of the above license is included in the file COPYING in the source.

[After Dark]: https://git.habd.as/comfusion/after-dark/
