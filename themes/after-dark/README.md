<img
  alt="After Dark"
  src="https://git.habd.as/comfusion/after-dark/raw/branch/master/static/images/logo-dark.png"
  width="358">

**Hugo Dark Theme Site Generator**
<br>[Docs](https://after-dark.habd.as) • [Releases](https://git.habd.as/comfusion/after-dark/releases) • [Community](https://t.me/afterdarkhugo)

## After Dark

[![Latest NPM version](https://img.shields.io/npm/v/after-dark.svg?style=flat-square)](https://www.npmjs.com/package/after-dark)
[![Monthly downloads](https://img.shields.io/npm/dm/after-dark.svg?style=flat-square)](https://www.npmjs.com/package/after-dark)
[![Minimum Hugo version](https://img.shields.io/badge/hugo->%3D%200.51-FF4088.svg?style=flat-square)](https://gohugo.io)
[![IRC chat](https://img.shields.io/badge/irc-%23after--dark-32AFED.svg?style=flat-square&longCache=true)](https://after-dark.habd.as/#chat)
[![AGPL licensed](https://img.shields.io/npm/l/after-dark.svg?style=flat-square&longCache=true)](https://git.habd.as/comfusion/after-dark/src/branch/master/COPYING)

One command is all you need to start a new website:

```sh
wget -qO - https://go.habd.as/after-dark | sh
```

**After Dark** is an extensible, robust templating system for [Hugo](https://gohugo.io) written from the ground up for speed, privacy and security.

## Features

Click a link below to learn more:

- **[Developer Focused](https://after-dark.habd.as/#feature-workflow)**: Cross-platform, 1 dependency, single-codebase.
- **[Incredibly Fast](https://after-dark.habd.as/#feature-speed)**: ~0.615s builds and decisecond page loads.
- **[Privacy Aware](https://after-dark.habd.as/#feature-privacy)**: No cookies, no external requests, ephemeral hosting.
- **[Securely Designed](https://after-dark.habd.as/#feature-security)**: Source-level integrity, content security and more.
- **[Advanced Graphics](https://after-dark.habd.as/#feature-graphics)**: Silky-smooth post and homepage images.
- **[Easily Customized](https://after-dark.habd.as/#feature-customize)**: Easily modify website look-and-feel.
- **[Fuzzy Search](https://after-dark.habd.as/#feature-search)**: Offline, automatic and no third-parties.
- **[Rewards System](https://after-dark.habd.as/#feature-rewards)**: Earn rewards for keeping your software up-to-date.
- **[Batteries Included](https://after-dark.habd.as/#feature-extras)**: Integrate with Gitea, k8s, Traefik and Fathom.
- **[Extended Builds](https://after-dark.habd.as/#feature-builds)**: Create high-performance Hugo builds with integrated Sass support.

## Screenshot

[![Demo](https://after-dark.habd.as/images/screenshots/after-dark-v6.15.0-homepage-fs8.png)](https://after-dark.habd.as)

## Demo

Visit the [official docs](https://after-dark.habd.as) for demo and documentation. For an example site see [habd.as](https://habd.as). Additional examples listed in the source repository Wiki.

## Getting Started

[Install Hugo](https://gohugo.io/getting-started/installing) `0.51` or greater on your machine before getting started unless starting with [After Dark K3s](https://after-dark.habd.as/extra/after-dark-k3s) or creating an [Extended Build](https://after-dark.habd.as/#feature-builds).

### Installation

For fastest installation use the provided [Quick Install](https://after-dark.habd.as/feature/quick-install/) script. Quick Install is ideal for first-time users and does not require use of git. Use it to automatically set-up, configure and run a sample After Dark website you may re-purpose as your own.

By convention After Dark may be used with an existing Hugo site by git cloning to or adding as a submodule of the `themes` directory:

```sh
flying-toasters
├── static
└── themes
    └── after-dark # the clone or submodule
```

See [Install a Single Theme](https://gohugo.io/themes/installing-and-using-themes/#install-a-single-theme) on the Hugo docs site for further instructions.

After Dark releases are tagged in git and [packaged on NPM](https://www.npmjs.com/package/after-dark). Use the NPM package to integrate After Dark into existing workflows.

### Usage

Review the [Online Help](https://after-dark.habd.as/feature/online-help/) to learn how to set-up and customize After Dark. Docs included with installation and may be served locally.

### Upgrading

Run the [Upgrade Script](https://after-dark.habd.as/feature/upgrade-script/) to check for updates and upgrade automatically:

```sh
./themes/after-dark/bin/upgrade
```

Upgrading replaces the file contents of the theme as a whole for security reasons. If you wish to modify the source please create a fork.

### Verifying

If installed or upgraded via script you may use the [Release Validator](https://after-dark.habd.as/validate/) to verify you're running a PGP-signed and SHA-verified release. Integrity is checked at the source level and may be performed offline. See [Release Hashes](https://after-dark.habd.as/feature/release-hashes/) for more info.

## Credits

Special thanks to エゴイスト for [hackcss](https://git.habd.as/jhabdas/hack), Dan Klammer for the [bytesize icons](https://git.habd.as/comfusion/bytesize-icons) and Vincent Prouillet for the [Zola port](https://www.getzola.org/themes/after-dark/).

## Rights

Copyright (C) 2019  Josh Habdas <jhabdas@protonmail.com>

After Dark is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

After Dark is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
