# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [9.2.3](https://git.habd.as/comfusion/after-dark/compare/v9.2.2...v9.2.3) (2021-01-04)

### [9.2.2](https://git.habd.as/comfusion/after-dark/compare/v9.2.1...v9.2.2) (2020-02-19)


### Bug Fixes

* **layouts/_default:** show posts on homepage as expected ([60d7c0d](https://git.habd.as/comfusion/after-dark/commit/60d7c0d)), closes [#174](https://git.habd.as/comfusion/after-dark/issues/174)
* **shortcode/blockquote:** prevent raw html output when body used with citelink attr ([903dd69](https://git.habd.as/comfusion/after-dark/commit/903dd69))



### [9.2.1](https://git.habd.as/comfusion/after-dark/compare/v9.2.0...v9.2.1) (2019-12-15)


### Bug Fixes

* collapse whitespace inside goldmark code blocks, alerts and cards ([5c9347d](https://git.habd.as/comfusion/after-dark/commit/5c9347d))
* print out the full table of contents ([c176a8c](https://git.habd.as/comfusion/after-dark/commit/c176a8c))



## [9.2.0](https://git.habd.as/comfusion/after-dark/compare/v9.1.0...v9.2.0) (2019-12-13)


### Bug Fixes

* **markdown:** restore footnote return links in hugo 0.60.0+ ([01aef48](https://git.habd.as/comfusion/after-dark/commit/01aef48))


### Build System

* **docker:** update for hugo release 0.61.0 ([0a1dc50](https://git.habd.as/comfusion/after-dark/commit/0a1dc50))
* **feature/extended-builds:** upgrade extended build to hugo@0.60.0, go@1.13.4 and alpine@3.10 ([b229f2b](https://git.habd.as/comfusion/after-dark/commit/b229f2b))


### Features

* **feat/extended-builds:** add dockerfile and docker-compose ([52f1830](https://git.habd.as/comfusion/after-dark/commit/52f1830))



## [9.1.0](https://git.habd.as/comfusion/after-dark/compare/v9.0.0...v9.1.0) (2019-08-21)


### Bug Fixes

* **feature/featured-posts:** default featured pages to empty slice when not defined ([785b403](https://git.habd.as/comfusion/after-dark/commit/785b403)), closes [#173](https://git.habd.as/comfusion/after-dark/issues/173)


### Build System

* **docker/hugo:** bump to 0.57.0 ([e090ab2](https://git.habd.as/comfusion/after-dark/commit/e090ab2))


### Features

* **feature/code-analysis:** add source build of htmltest ([1cd1d6c](https://git.habd.as/comfusion/after-dark/commit/1cd1d6c)), closes [#124](https://git.habd.as/comfusion/after-dark/issues/124) [#165](https://git.habd.as/comfusion/after-dark/issues/165)



## [9.0.0](https://git.habd.as/comfusion/after-dark/compare/v8.3.3...v9.0.0) (2019-08-12)


### Features

* **feature/featured-posts:** allow featured items in posts section ([49f5c56](https://git.habd.as/comfusion/after-dark/commit/49f5c56)), closes [#170](https://git.habd.as/comfusion/after-dark/issues/170) [#160](https://git.habd.as/comfusion/after-dark/issues/160)


### BREAKING CHANGES

* **feature/featured-posts:** Hugo minimum required version now 0.51 (was 0.44)



### [8.3.4](https://git.habd.as/comfusion/after-dark/compare/v8.3.3...v8.3.4) (2019-08-05)

Finish documentation TODOs.

### [8.3.3](https://git.habd.as/comfusion/after-dark/compare/v8.3.2...v8.3.3) (2019-07-31)


### Build System

* **docker/hugo:** support extended builds of hugo 0.56.0 ([3ee8bea](https://git.habd.as/comfusion/after-dark/commit/3ee8bea)), closes [#161](https://git.habd.as/comfusion/after-dark/issues/161)



### [8.3.2](https://git.habd.as/comfusion/after-dark/compare/v8.3.1...v8.3.2) (2019-07-22)


### Bug Fixes

* **feature/post-images:** prevent content from jumping as image loads ([452ce64](https://git.habd.as/comfusion/after-dark/commit/452ce64)), closes [#162](https://git.habd.as/comfusion/after-dark/issues/162)


### Build System

* **npm:** audit and fix dev dependency vulnerabilities ([782506e](https://git.habd.as/comfusion/after-dark/commit/782506e))
* **npm:** greenkeep commit helper and changelog generator ([0c571ef](https://git.habd.as/comfusion/after-dark/commit/0c571ef))



### [8.3.1](https://git.habd.as/comfusion/after-dark/compare/v8.3.0...v8.3.1) (2019-07-21)


### Bug Fixes

* **bin/upgrade:** properly detect current theme version, if present ([59cebcb](https://git.habd.as/comfusion/after-dark/commit/59cebcb))



## [8.3.0](https://git.habd.as/comfusion/after-dark/compare/v8.2.0...v8.3.0) (2019-07-21)


### Features

* **shortcode/video:** add video shortcode ([ace4c7c](https://git.habd.as/comfusion/after-dark/commit/ace4c7c)), closes [#20](https://git.habd.as/comfusion/after-dark/issues/20) [#81](https://git.habd.as/comfusion/after-dark/issues/81)



## [8.2.0](https://git.habd.as/comfusion/after-dark/compare/v8.1.0...v8.2.0) (2019-07-18)


### Bug Fixes

* **assets/css:** prevent ie10+ scrollbar from causing layout to jump ([105356f](https://git.habd.as/comfusion/after-dark/commit/105356f)), closes [#144](https://git.habd.as/comfusion/after-dark/issues/144)
* **bin/install:** resolve shellcheck warns for improved portability ([67a080f](https://git.habd.as/comfusion/after-dark/commit/67a080f)), closes [#154](https://git.habd.as/comfusion/after-dark/issues/154)


### Features

* **feature/fuzzy-search:** add app init loading indicator and noscript experience ([da82ae2](https://git.habd.as/comfusion/after-dark/commit/da82ae2)), closes [#143](https://git.habd.as/comfusion/after-dark/issues/143)



## [8.1.0](https://git.habd.as/comfusion/after-dark/compare/v8.0.2...v8.1.0) (2019-07-12)


### Features

* **feature/custom-homepage:** add custom homepage and docs in english ([87d2076](https://git.habd.as/comfusion/after-dark/commit/87d2076)), closes [#41](https://git.habd.as/comfusion/after-dark/issues/41)
* **snippets:** abstract figure shortcode for use in layout ([8ca09f4](https://git.habd.as/comfusion/after-dark/commit/8ca09f4))



### [8.0.2](https://git.habd.as/comfusion/after-dark/compare/v8.0.1...v8.0.2) (2019-07-02)



### [8.0.1](https://git.habd.as/comfusion/after-dark/compare/v8.0.0...v8.0.1) (2019-07-01)


### Build System

* **npm/lockfile:** improve sec of dev deps with 1 audit fixed ([d956c71](https://git.habd.as/comfusion/after-dark/commit/d956c71))



## 8.0.0 (2019-05-17)

Moves After Dark to AGPLv3+.

### Bug Fixes

* **$images:** improve bpg image support ([e8a2e29](https://git.habd.as/comfusion/after-dark/commit/e8a2e29)), closes [#48](https://git.habd.as/comfusion/after-dark/issues/48)
* **$layouts:** add support for protocol-relative base urls ([bd4db87](https://git.habd.as/comfusion/after-dark/commit/bd4db87)), closes [#37](https://git.habd.as/comfusion/after-dark/issues/37)
* **$layouts:** disable ua input styling safari mobile ([bffb325](https://git.habd.as/comfusion/after-dark/commit/bffb325))
* **$layouts:** fix error calling partial in related content ([ab4a1df](https://git.habd.as/comfusion/after-dark/commit/ab4a1df)), closes [#55](https://git.habd.as/comfusion/after-dark/issues/55)
* **$layouts:** improve search input focus and usability ([5e2500f](https://git.habd.as/comfusion/after-dark/commit/5e2500f)), closes [#91](https://git.habd.as/comfusion/after-dark/issues/91)
* **$layouts:** move stylesheets back to partials, reorganize files ([c5871f1](https://git.habd.as/comfusion/after-dark/commit/c5871f1)), closes [#50](https://git.habd.as/comfusion/after-dark/issues/50)
* **$layouts:** prevent auto-zoom on safari mobile ([60d5b37](https://git.habd.as/comfusion/after-dark/commit/60d5b37))
* **$layouts:** prevent js error on search form submit ([96b483c](https://git.habd.as/comfusion/after-dark/commit/96b483c)), closes [#94](https://git.habd.as/comfusion/after-dark/issues/94)
* **$layouts:** remove iframe borders by default ([aeeafa2](https://git.habd.as/comfusion/after-dark/commit/aeeafa2))
* **$layouts:** update powered-by to link to new theme site ([500ccb9](https://git.habd.as/comfusion/after-dark/commit/500ccb9))
* **$shortcodes:** fix issue with external link appearance ([f7cd49c](https://git.habd.as/comfusion/after-dark/commit/f7cd49c))
* **$style:** add more whitespace on list pages and darken muted text ([8ba617c](https://git.habd.as/comfusion/after-dark/commit/8ba617c))
* **$style:** fix a whitespace issue near the readmore link ([82155e9](https://git.habd.as/comfusion/after-dark/commit/82155e9)), closes [#70](https://git.habd.as/comfusion/after-dark/issues/70)
* **archetypes:** close tag body on last external shortcode ([fd6dd8d](https://git.habd.as/comfusion/after-dark/commit/fd6dd8d))
* **archetypes:** default posts to display as published content ([47071fe](https://git.habd.as/comfusion/after-dark/commit/47071fe))
* **archetypes:** fix broken links in post archetype ([0d65b6a](https://git.habd.as/comfusion/after-dark/commit/0d65b6a))
* **archetypes:** prevent internal links from opening in new window ([c488a12](https://git.habd.as/comfusion/after-dark/commit/c488a12))
* **archetypes/validate:** swap string method for sha trim behavior ([feb0150](https://git.habd.as/comfusion/after-dark/commit/feb0150)), closes [#90](https://git.habd.as/comfusion/after-dark/issues/90)
* **assets:** stop treating all permalinks as external ([7e1d3cc](https://git.habd.as/comfusion/after-dark/commit/7e1d3cc))
* **assets/css:** normalize base font-size, large screens ([912ec97](https://git.habd.as/comfusion/after-dark/commit/912ec97))
* **assets/css:** normalize samp element font size with pre ([966c767](https://git.habd.as/comfusion/after-dark/commit/966c767))
* **assets/css:** normalize size of help text on small viewports ([55ba9e2](https://git.habd.as/comfusion/after-dark/commit/55ba9e2))
* **assets/css:** normalize whitespace around toc when post images present ([4acbace](https://git.habd.as/comfusion/after-dark/commit/4acbace))
* **assets/css:** unset ua default figure element margin ([7925a94](https://git.habd.as/comfusion/after-dark/commit/7925a94))
* **assets/theme:** normalize blockquote line-height with rest of document ([5220b94](https://git.habd.as/comfusion/after-dark/commit/5220b94))
* **bin:** remove preview script ([4f7af96](https://git.habd.as/comfusion/after-dark/commit/4f7af96)), closes [#38](https://git.habd.as/comfusion/after-dark/issues/38)
* **bundle:** add images to npm ignore file ([b7cbe87](https://git.habd.as/comfusion/after-dark/commit/b7cbe87))
* **bundle:** remove images folder from npm release ([df9ce55](https://git.habd.as/comfusion/after-dark/commit/df9ce55))
* **components:** correct help block class attr behavior ([586a290](https://git.habd.as/comfusion/after-dark/commit/586a290))
* **feature/post-images:** fix yandex validation error ([f758c2e](https://git.habd.as/comfusion/after-dark/commit/f758c2e))
* **feature/post-images:** zap extra whitespaces ([66c27ec](https://git.habd.as/comfusion/after-dark/commit/66c27ec))
* **feature/web-feeds:** output last build date in rfc822 with 4-digit year ([4c86b4a](https://git.habd.as/comfusion/after-dark/commit/4c86b4a))
* **fuzzy-search:** handle search layout hotkey assignments properly ([630d3a9](https://git.habd.as/comfusion/after-dark/commit/630d3a9))
* **help:** change 404 page to error page and improve script perf ([9749575](https://git.habd.as/comfusion/after-dark/commit/9749575)), closes [#43](https://git.habd.as/comfusion/after-dark/issues/43)
* **help:** rename 404 to error page ([e158065](https://git.habd.as/comfusion/after-dark/commit/e158065))
* **help/home:** add missing query string param to search link ([7c5f35d](https://git.habd.as/comfusion/after-dark/commit/7c5f35d))
* **help/home:** add performance info & undocumented features ([a8e18c5](https://git.habd.as/comfusion/after-dark/commit/a8e18c5))
* **hugo:** require 0.44 at minimum ([6e2f11e](https://git.habd.as/comfusion/after-dark/commit/6e2f11e))
* **install:** add flags for theme setup script ([1282c7c](https://git.habd.as/comfusion/after-dark/commit/1282c7c))
* **install:** improve install experience ([52d6236](https://git.habd.as/comfusion/after-dark/commit/52d6236))
* **install:** install packages from npm ([1c2df4f](https://git.habd.as/comfusion/after-dark/commit/1c2df4f))
* **install:** kill hugo server always ([de3c8a5](https://git.habd.as/comfusion/after-dark/commit/de3c8a5))
* **install:** move it back to bin ([ba92ce6](https://git.habd.as/comfusion/after-dark/commit/ba92ce6))
* **install:** move kill command to eof ([7075c82](https://git.habd.as/comfusion/after-dark/commit/7075c82))
* **install:** move to scripts folder ([30a8b04](https://git.habd.as/comfusion/after-dark/commit/30a8b04))
* **install:** remove git cruft & supply actual module name ([7dd0e9e](https://git.habd.as/comfusion/after-dark/commit/7dd0e9e))
* **install:** remove unexpected line in theme config ([7e424bd](https://git.habd.as/comfusion/after-dark/commit/7e424bd))
* **install:** remove useful snippets content ([0278216](https://git.habd.as/comfusion/after-dark/commit/0278216))
* **install:** restore android support ([3218ce2](https://git.habd.as/comfusion/after-dark/commit/3218ce2)), closes [#25](https://git.habd.as/comfusion/after-dark/issues/25)
* **install:** standardize install script ([9daad48](https://git.habd.as/comfusion/after-dark/commit/9daad48)), closes [#19](https://git.habd.as/comfusion/after-dark/issues/19)
* **install:** stop copying all archetypes to site ([b7df91a](https://git.habd.as/comfusion/after-dark/commit/b7df91a)), closes [#45](https://git.habd.as/comfusion/after-dark/issues/45)
* **install:** support both gnu and bsd grep ([0cc315a](https://git.habd.as/comfusion/after-dark/commit/0cc315a))
* **install:** update default open graph image ([f476561](https://git.habd.as/comfusion/after-dark/commit/f476561))
* **install:** update example base url ([f24a9f9](https://git.habd.as/comfusion/after-dark/commit/f24a9f9))
* **install:** use latest version from npm dist tags ([91a3fb1](https://git.habd.as/comfusion/after-dark/commit/91a3fb1))
* **install:** wait 1 second before serving help for docs to expire ([9ca3862](https://git.habd.as/comfusion/after-dark/commit/9ca3862))
* **layout/default:** workaround hugo bug on eval len(nil) go tmpl ([d8bdcfc](https://git.habd.as/comfusion/after-dark/commit/d8bdcfc)), closes [#135](https://git.habd.as/comfusion/after-dark/issues/135)
* **layouts:** move inline-level content in navs inside <p> ([42c9004](https://git.habd.as/comfusion/after-dark/commit/42c9004))
* **layouts:** output meta description when not explicitly set ([f347138](https://git.habd.as/comfusion/after-dark/commit/f347138)), closes [#21](https://git.habd.as/comfusion/after-dark/issues/21)
* **layouts:** output urls relative to baseurl ([0205bd1](https://git.habd.as/comfusion/after-dark/commit/0205bd1)), closes [#4](https://git.habd.as/comfusion/after-dark/issues/4)
* **layouts:** remove navmenu from help layout ([470b452](https://git.habd.as/comfusion/after-dark/commit/470b452))
* **layouts:** restore smooth scrolling to toc links ([8db7451](https://git.habd.as/comfusion/after-dark/commit/8db7451))
* **layouts:** show sarcastic message when no pages exist ([990f0b6](https://git.habd.as/comfusion/after-dark/commit/990f0b6))
* **layouts:** stop outputting trim color if none present ([73e824a](https://git.habd.as/comfusion/after-dark/commit/73e824a))
* **layouts:** use relative urls in post byline taxonomy links ([a170089](https://git.habd.as/comfusion/after-dark/commit/a170089))
* **layouts/partials:** add main menu display condition ([93ed6cd](https://git.habd.as/comfusion/after-dark/commit/93ed6cd)), closes [#78](https://git.habd.as/comfusion/after-dark/issues/78)
* **layouts/partials:** move navmenu snippet into theme ([1c0e945](https://git.habd.as/comfusion/after-dark/commit/1c0e945)), closes [#78](https://git.habd.as/comfusion/after-dark/issues/78)
* **layouts/search:** unblock blocking scripts and add command terminators ([455b6fe](https://git.habd.as/comfusion/after-dark/commit/455b6fe)), closes [#14](https://git.habd.as/comfusion/after-dark/issues/14)
* **links:** style external links in all browsers ([3e2aa61](https://git.habd.as/comfusion/after-dark/commit/3e2aa61)), closes [#22](https://git.habd.as/comfusion/after-dark/issues/22)
* **onboarding:** add explicit site port setting in install script ([b851b0b](https://git.habd.as/comfusion/after-dark/commit/b851b0b))
* **onboarding:** serve site not help when starting site from installer ([3447556](https://git.habd.as/comfusion/after-dark/commit/3447556))
* **partials:** fix markup validation error ([43a9ed0](https://git.habd.as/comfusion/after-dark/commit/43a9ed0))
* **partials:** make button onclick handler work as expected ([74ef00a](https://git.habd.as/comfusion/after-dark/commit/74ef00a))
* **partials/powered-by:** point to expected directory of refactored file ([d61f131](https://git.habd.as/comfusion/after-dark/commit/d61f131))
* **personalization:** rename accent color to trim color ([953c73e](https://git.habd.as/comfusion/after-dark/commit/953c73e))
* **scripts:** add || to server shutdown ([f7f2849](https://git.habd.as/comfusion/after-dark/commit/f7f2849))
* **scripts:** address error generating docs after upgrade ([f84cd40](https://git.habd.as/comfusion/after-dark/commit/f84cd40))
* **scripts:** always regnerate help docs ([082f1be](https://git.habd.as/comfusion/after-dark/commit/082f1be))
* **scripts:** automatically stop running help servers on upgrade ([87feadc](https://git.habd.as/comfusion/after-dark/commit/87feadc))
* **scripts:** remove help before generating on upgrade ([0049586](https://git.habd.as/comfusion/after-dark/commit/0049586))
* **scripts:** resolve help doc path lookups when no custom content dir ([6792cd7](https://git.habd.as/comfusion/after-dark/commit/6792cd7))
* **scripts:** resolve syntax bugs in script ([0b349ed](https://git.habd.as/comfusion/after-dark/commit/0b349ed))
* **scripts:** resolve tar cd issue ([a573640](https://git.habd.as/comfusion/after-dark/commit/a573640))
* **scripts:** update install to place theme metadata in theme data folder ([5e89f6d](https://git.habd.as/comfusion/after-dark/commit/5e89f6d)), closes [#59](https://git.habd.as/comfusion/after-dark/issues/59)
* **shortcode/hackcss-alert:** restore legacy behavior for shortcode ([975f2b7](https://git.habd.as/comfusion/after-dark/commit/975f2b7))
* **shortcode/navmenu:** improve microdata semantics & add test tool to docs ([31992f5](https://git.habd.as/comfusion/after-dark/commit/31992f5)), closes [#100](https://git.habd.as/comfusion/after-dark/issues/100)
* **shortcodes:** remove insignificant spaces after external links ([1f06f5c](https://git.habd.as/comfusion/after-dark/commit/1f06f5c))
* **shortcodes:** remove privacytube and coub shortcodes ([f5ddb1a](https://git.habd.as/comfusion/after-dark/commit/f5ddb1a)), closes [#35](https://git.habd.as/comfusion/after-dark/issues/35)
* **shortcodes:** remove standard link treatment from figures ([a619320](https://git.habd.as/comfusion/after-dark/commit/a619320))
* **shortcodes/button:** allow name attribute & pass id as expected ([c58645a](https://git.habd.as/comfusion/after-dark/commit/c58645a))
* **snippets:** add name attribute to form ([78f3482](https://git.habd.as/comfusion/after-dark/commit/78f3482))
* **snippets:** reverse logic for external link styling ([2889192](https://git.habd.as/comfusion/after-dark/commit/2889192))
* **styles:** leftpad orderd lists ([a944ead](https://git.habd.as/comfusion/after-dark/commit/a944ead))
* **theme:** enable white theme variant ([2addeaa](https://git.habd.as/comfusion/after-dark/commit/2addeaa))
* **typography:** only justify and hyphenate article bodies ([52f046a](https://git.habd.as/comfusion/after-dark/commit/52f046a))
* **typography:** remove text justification and hyphenation ([2bfa8f7](https://git.habd.as/comfusion/after-dark/commit/2bfa8f7))
* **typography:** stop justifying and hyphenating text on small viewports ([929ae7e](https://git.habd.as/comfusion/after-dark/commit/929ae7e))
* 404 page theme color url ref ([2303007](https://git.habd.as/comfusion/after-dark/commit/2303007))
* add add theme color to 404 page ([1379cfc](https://git.habd.as/comfusion/after-dark/commit/1379cfc))


### Build System

* **npm:** pull unused dev dep ([14bab76](https://git.habd.as/comfusion/after-dark/commit/14bab76))
* **npm:** upgrade lockfile to v1 ([25ce8fa](https://git.habd.as/comfusion/after-dark/commit/25ce8fa))
* **npm:** upgrade standard-version to latest ([2ecf9de](https://git.habd.as/comfusion/after-dark/commit/2ecf9de))
* add sha512 digest to git tags and gpg sign them ([e16ab0b](https://git.habd.as/comfusion/after-dark/commit/e16ab0b))
* append sha512 to release tag and self-sign ([f054416](https://git.habd.as/comfusion/after-dark/commit/f054416)), closes [#33](https://git.habd.as/comfusion/after-dark/issues/33)
* enclose release tag sha512 in delimeters ([38127fc](https://git.habd.as/comfusion/after-dark/commit/38127fc)), closes [#33](https://git.habd.as/comfusion/after-dark/issues/33)
* **$hugo:** inline css using readFile template function ([37834f9](https://git.habd.as/comfusion/after-dark/commit/37834f9)), closes [#44](https://git.habd.as/comfusion/after-dark/issues/44)
* **$npm:** patch moderate security vulnerability in dev dep ([6c763c3](https://git.habd.as/comfusion/after-dark/commit/6c763c3))
* **$npm:** switch from yarn to npm lockfile ([185ad8f](https://git.habd.as/comfusion/after-dark/commit/185ad8f))
* **$yarn:** add yarn and update dev dependencies and scripts ([d115256](https://git.habd.as/comfusion/after-dark/commit/d115256))
* **bin:** improve support for linux ([f2c3d0b](https://git.habd.as/comfusion/after-dark/commit/f2c3d0b))
* **install:** bail early ([55798c3](https://git.habd.as/comfusion/after-dark/commit/55798c3))
* **install:** update install process ([86c69ef](https://git.habd.as/comfusion/after-dark/commit/86c69ef))
* **scripts:** remove unused variables from install script ([a1e095a](https://git.habd.as/comfusion/after-dark/commit/a1e095a))


### Features

* **$archetypes:** turn archetypes into go templates ([1ef09c6](https://git.habd.as/comfusion/after-dark/commit/1ef09c6))
* **$archetypes:** turn archetypes into go templates ([56d86d3](https://git.habd.as/comfusion/after-dark/commit/56d86d3))
* **$layout:** add base element to base layout ([ddff5a9](https://git.habd.as/comfusion/after-dark/commit/ddff5a9)), closes [#60](https://git.habd.as/comfusion/after-dark/issues/60)
* **$layout:** Add support for external stylesheets ([917cf91](https://git.habd.as/comfusion/after-dark/commit/917cf91)), closes [#49](https://git.habd.as/comfusion/after-dark/issues/49)
* **$layout:** add telegram iv support ([d6bf3b6](https://git.habd.as/comfusion/after-dark/commit/d6bf3b6)), closes [#113](https://git.habd.as/comfusion/after-dark/issues/113)
* **$layouts:** add fuzzy search ([f9a787e](https://git.habd.as/comfusion/after-dark/commit/f9a787e)), closes [#83](https://git.habd.as/comfusion/after-dark/issues/83)
* **$layouts:** add post images ([b151db3](https://git.habd.as/comfusion/after-dark/commit/b151db3))
* **$layouts:** add twitter cards ([a1412a9](https://git.habd.as/comfusion/after-dark/commit/a1412a9)), closes [#76](https://git.habd.as/comfusion/after-dark/issues/76)
* **$layouts:** allow customization of referrer policy and add privacy-focused default ([7bde6b6](https://git.habd.as/comfusion/after-dark/commit/7bde6b6)), closes [#96](https://git.habd.as/comfusion/after-dark/issues/96)
* **$layouts:** hide related content reading time on small screen ([7cfa4eb](https://git.habd.as/comfusion/after-dark/commit/7cfa4eb))
* **$layouts:** use related content feature introduced in hugo@0.27 ([b408db9](https://git.habd.as/comfusion/after-dark/commit/b408db9)), closes [#54](https://git.habd.as/comfusion/after-dark/issues/54)
* **$partials:** add pubdate structured data to post byline ([42f34ae](https://git.habd.as/comfusion/after-dark/commit/42f34ae))
* **$shortcode:** add coub shortcode for gifs with sound ([df9dae8](https://git.habd.as/comfusion/after-dark/commit/df9dae8)), closes [#63](https://git.habd.as/comfusion/after-dark/issues/63)
* **$shortcode:** style cite element inside block quotation ([158c0f4](https://git.habd.as/comfusion/after-dark/commit/158c0f4))
* **$shortcodes:** add frame targeting to custom figure shortcode ([b802dab](https://git.habd.as/comfusion/after-dark/commit/b802dab))
* **$shortcodes:** add youtube without cookies ([f6f837e](https://git.habd.as/comfusion/after-dark/commit/f6f837e)), closes [#62](https://git.habd.as/comfusion/after-dark/issues/62)
* **$shortcodes:** enable target and method control for button/buttongroup ([c3d1599](https://git.habd.as/comfusion/after-dark/commit/c3d1599)), closes [#56](https://git.habd.as/comfusion/after-dark/issues/56)
* **$shortcodes:** make button shortcode clickable ([fa24f4a](https://git.habd.as/comfusion/after-dark/commit/fa24f4a)), closes [#40](https://git.habd.as/comfusion/after-dark/issues/40)
* **$theme:** add support for bpg image format ([3976ec0](https://git.habd.as/comfusion/after-dark/commit/3976ec0)), closes [#45](https://git.habd.as/comfusion/after-dark/issues/45)
* **bin:** add script to preview site online over https ([730df77](https://git.habd.as/comfusion/after-dark/commit/730df77)), closes [#21](https://git.habd.as/comfusion/after-dark/issues/21)
* **feature/fuzzy-search:** add aria landmark to search form ([5b26f51](https://git.habd.as/comfusion/after-dark/commit/5b26f51))
* **feature/post-images:** add image captions and structured data ([9a5c283](https://git.habd.as/comfusion/after-dark/commit/9a5c283))
* **feature/section-menu:** add support for html link decoration ([f02c68f](https://git.habd.as/comfusion/after-dark/commit/f02c68f))
* **feature/section-menu:** add support for multiple nav menus ([0c468a5](https://git.habd.as/comfusion/after-dark/commit/0c468a5))
* **feature/security:** add content security policy ([7e438ad](https://git.habd.as/comfusion/after-dark/commit/7e438ad))
* **feature/table-of-contents:** add native smooth-scroll ([f1606b6](https://git.habd.as/comfusion/after-dark/commit/f1606b6)), closes [#43](https://git.habd.as/comfusion/after-dark/issues/43)
* **fuzzy-search:** add ability to assign arbitrary hotkeys ([f429c4a](https://git.habd.as/comfusion/after-dark/commit/f429c4a)), closes [#74](https://git.habd.as/comfusion/after-dark/issues/74)
* **help:** multipage help docs ([ef25e00](https://git.habd.as/comfusion/after-dark/commit/ef25e00)), closes [#61](https://git.habd.as/comfusion/after-dark/issues/61)
* **help:** update and run help anytime using included script ([fc93864](https://git.habd.as/comfusion/after-dark/commit/fc93864))
* **help/homepage:** update security featurette ([c567bd4](https://git.habd.as/comfusion/after-dark/commit/c567bd4))
* **highlighting:** add syntax highlighting ([a038ee0](https://git.habd.as/comfusion/after-dark/commit/a038ee0))
* **install:** add installation challenge ([9d438fe](https://git.habd.as/comfusion/after-dark/commit/9d438fe))
* **install:** faux install validation using npm sha512 digest ([e7625da](https://git.habd.as/comfusion/after-dark/commit/e7625da)), closes [#33](https://git.habd.as/comfusion/after-dark/issues/33)
* **install:** provide welcome post with online help ([79838ed](https://git.habd.as/comfusion/after-dark/commit/79838ed))
* **install:** simplify installation ([da3f66e](https://git.habd.as/comfusion/after-dark/commit/da3f66e))
* **install:** streamline installation ([15f61f5](https://git.habd.as/comfusion/after-dark/commit/15f61f5)), closes [#2](https://git.habd.as/comfusion/after-dark/issues/2)
* **layout,install:** add automatic syntax highlighting ([70d2bfc](https://git.habd.as/comfusion/after-dark/commit/70d2bfc))
* **layouts:** add meta keywords to base template ([d5f146f](https://git.habd.as/comfusion/after-dark/commit/d5f146f)), closes [#20](https://git.habd.as/comfusion/after-dark/issues/20)
* **layouts:** add support for hugo 0.20.2 ([ac42370](https://git.habd.as/comfusion/after-dark/commit/ac42370))
* **layouts:** provide form builder snippets ([ada893d](https://git.habd.as/comfusion/after-dark/commit/ada893d))
* **layouts/*:** add cookie disclaimer ([446f6f8](https://git.habd.as/comfusion/after-dark/commit/446f6f8))
* **layouts/search:** and placeholder and allow basic customization ([7a669ef](https://git.habd.as/comfusion/after-dark/commit/7a669ef))
* **layouts/shortcodes:** add grid and cell flexbox shortcode & snippet ([77df2c4](https://git.habd.as/comfusion/after-dark/commit/77df2c4)), closes [#67](https://git.habd.as/comfusion/after-dark/issues/67)
* **layouts/shortcodes:** add select shortcode, docs and example use ([85eefe5](https://git.habd.as/comfusion/after-dark/commit/85eefe5))
* **license:** wtfpl -> agpl-3.0-or-later ([1a7a2a9](https://git.habd.as/comfusion/after-dark/commit/1a7a2a9)), closes [#148](https://git.habd.as/comfusion/after-dark/issues/148)
* **LICENSE:** you just do what the fuck you want to ([d75ea18](https://git.habd.as/comfusion/after-dark/commit/d75ea18))
* **module/toxic-swamp:** integrate module beta ([743ebfc](https://git.habd.as/comfusion/after-dark/commit/743ebfc))
* **modules:** add analytics module ([1c5c6bb](https://git.habd.as/comfusion/after-dark/commit/1c5c6bb)), closes [#1](https://git.habd.as/comfusion/after-dark/issues/1)
* **modules:** add fractal forest module for bpg image format support ([76b9cfd](https://git.habd.as/comfusion/after-dark/commit/76b9cfd)), closes [#8](https://git.habd.as/comfusion/after-dark/issues/8)
* **modules:** add hall of mirrors ([592b2b2](https://git.habd.as/comfusion/after-dark/commit/592b2b2)), closes [#24](https://git.habd.as/comfusion/after-dark/issues/24)
* **onboarding:** streamline installation ([34ce45a](https://git.habd.as/comfusion/after-dark/commit/34ce45a))
* **personalization:** add customizable accent colors ([be90f47](https://git.habd.as/comfusion/after-dark/commit/be90f47))
* select theme variant directly from site config ([81a4663](https://git.habd.as/comfusion/after-dark/commit/81a4663)), closes [#6](https://git.habd.as/comfusion/after-dark/issues/6)
* **powered-by:** add page generation date ([430a468](https://git.habd.as/comfusion/after-dark/commit/430a468))
* **scripts:** add theme upgrade script ([c9a5c3a](https://git.habd.as/comfusion/after-dark/commit/c9a5c3a)), closes [#59](https://git.habd.as/comfusion/after-dark/issues/59)
* **scripts:** support custom content dirs in config file ([e72e914](https://git.habd.as/comfusion/after-dark/commit/e72e914)), closes [#59](https://git.habd.as/comfusion/after-dark/issues/59)
* **scripts/upgrade:** prompt for update if metadata cannot be found ([db3216d](https://git.habd.as/comfusion/after-dark/commit/db3216d))
* **shortcode:** add trusted custom attr to external ([9b0d5f5](https://git.habd.as/comfusion/after-dark/commit/9b0d5f5))
* **shortcodes:** add blockquote shortcode ([d57e535](https://git.habd.as/comfusion/after-dark/commit/d57e535))
* **shortcodes:** add figure shortcode ([2c06d76](https://git.habd.as/comfusion/after-dark/commit/2c06d76))
* **shortcodes:** add form attr to button ([86d4fee](https://git.habd.as/comfusion/after-dark/commit/86d4fee))
* **shortcodes:** add hack progress bar component ([1933b45](https://git.habd.as/comfusion/after-dark/commit/1933b45))
* **shortcodes:** add hackcss alert shortcode ([09720f8](https://git.habd.as/comfusion/after-dark/commit/09720f8))
* **shortcodes:** add hackcss alert shortcode ([6f20f2d](https://git.habd.as/comfusion/after-dark/commit/6f20f2d))
* **shortcodes:** add hackcss button group component ([af226e4](https://git.habd.as/comfusion/after-dark/commit/af226e4))
* **shortcodes:** add hackcss button shortcode ([65fd4e3](https://git.habd.as/comfusion/after-dark/commit/65fd4e3))
* **shortcodes:** add hackcss card component ([0787170](https://git.habd.as/comfusion/after-dark/commit/0787170))
* **shortcodes:** add hackcss loading component ([e0165ed](https://git.habd.as/comfusion/after-dark/commit/e0165ed))
* **shortcodes:** add hackcss progress component ([b475a47](https://git.habd.as/comfusion/after-dark/commit/b475a47))
* **shortcodes:** add id attribute for forms ([a76dff1](https://git.habd.as/comfusion/after-dark/commit/a76dff1))
* **shortcodes:** add navmenu ([87bd381](https://git.habd.as/comfusion/after-dark/commit/87bd381)), closes [#78](https://git.habd.as/comfusion/after-dark/issues/78)
* **shortcodes:** add navmenu navigational aid ([a333be4](https://git.habd.as/comfusion/after-dark/commit/a333be4))
* **shortcodes:** add title attr to external ([9386ef4](https://git.habd.as/comfusion/after-dark/commit/9386ef4))
* **shortcodes:** add type attribute for external links ([5c99a96](https://git.habd.as/comfusion/after-dark/commit/5c99a96))
* **shortcodes:** add value attr to button ([6d63de4](https://git.habd.as/comfusion/after-dark/commit/6d63de4))
* **shortcodes:** allow anonymous blockquotes ([256d15c](https://git.habd.as/comfusion/after-dark/commit/256d15c))
* **shortcodes:** allow button disablement ([7bbf79b](https://git.habd.as/comfusion/after-dark/commit/7bbf79b)), closes [#65](https://git.habd.as/comfusion/after-dark/issues/65)
* **shortcodes:** trim whitespace in id attributes ([a5c5704](https://git.habd.as/comfusion/after-dark/commit/a5c5704))
* **shortcodes/button:** add custom class support ([60fb9d2](https://git.habd.as/comfusion/after-dark/commit/60fb9d2))
* **shortcodes/external:** add shorthand usage for named anchors ([0aa0585](https://git.habd.as/comfusion/after-dark/commit/0aa0585))
* **snippets:** add external link snippet ([848cd33](https://git.habd.as/comfusion/after-dark/commit/848cd33)), closes [#48](https://git.habd.as/comfusion/after-dark/issues/48)
* **snippets:** alert user on invalid autocomplete value ([cabf33b](https://git.habd.as/comfusion/after-dark/commit/cabf33b)), closes [#46](https://git.habd.as/comfusion/after-dark/issues/46)
* **typography:** justify text output and hyphenate ([738aaaa](https://git.habd.as/comfusion/after-dark/commit/738aaaa))


### BREAKING CHANGES

* **license:** relicensing
* **feature/section-menu:** removes disqus entirely, previously a deprecated feature
* **shortcodes:** shortcodes removed must now be copied to the theme, if used
* **modules:** google analytics no longer supported
* hugo 0.43 and above required. css override file locations have changed
* **$archetypes:** Minimum Hugo version set 0.24, 0.16 - 0.23 must modify archetypes

to upgrade add `date` and `title` to custom archetypes. if using a version of hugo prior to 0.24 the custom templates should remove `title` and `date` and not use go templating logic in the archetype files
* **$archetypes:** Minimum Hugo version set 0.24, 0.16 - 0.23 must modify archetypes
* **$hugo:** Forks and users who've customized css need adjustment as shown in the commit message. There's not a whole lot to it, but it's breaking nonetheless.

Using this approach enables the CSS to be moved from the partials directory into the static
directory where it belonged the whole time. Perfect set-up for those who decide to use http2/h2
server push for loading styles more efficiently.



<a name="7.4.1"></a>
## [7.4.1](https://git.habd.as/comfusion/after-dark/compare/v7.4.0...v7.4.1) (2019-04-28)


### Bug Fixes

* **fuzzy-search:** handle search layout hotkey assignments properly ([b2c549e](https://git.habd.as/comfusion/after-dark/commits/b2c549e))



<a name="7.4.0"></a>
# [7.4.0](https://git.habd.as/comfusion/after-dark/compare/v7.2.3...v7.4.0) (2019-04-28)


### Features

* **fuzzy-search:** add ability to assign arbitrary hotkeys ([48a15c4](https://git.habd.as/comfusion/after-dark/commits/48a15c4)), closes [#74](https://git.habd.as/comfusion/after-dark/issues/74)
* **shortcode:** add trusted custom attr to external ([0c81ba7](https://git.habd.as/comfusion/after-dark/commits/0c81ba7))

**Note:** Shortcode update included again in this release with signed commmit

<a name="7.3.0"></a>
# [7.3.0](https://git.habd.as/comfusion/after-dark/compare/v7.2.3...v7.3.0) (2019-04-27)


### Features

* **shortcode:** add trusted custom attr to external ([ba1d35e](https://git.habd.as/comfusion/after-dark/commits/ba1d35e))



<a name="7.2.4"></a>
## [7.2.4](https://git.habd.as/comfusion/after-dark/compare/v7.2.3...v7.2.4) (2019-04-16)

### Bug Fixes

Fix issue to allow docs site to load

<a name="7.2.3"></a>
## [7.2.3](https://git.habd.as/comfusion/after-dark/compare/v7.2.2...v7.2.3) (2019-04-12)

### But Fixes

Fix remaining Hugo warnings masked before last release

<a name="7.2.2"></a>
## [7.2.2](https://git.habd.as/comfusion/after-dark/compare/v7.2.1...v7.2.2) (2019-04-12)


### Bug Fixes

* **feature/web-feeds:** output last build date in rfc822 with 4-digit year ([c735feb](https://git.habd.as/comfusion/after-dark/commits/c735feb))
* **shortcode/hackcss-alert:** restore legacy behavior for shortcode ([b127eeb](https://git.habd.as/comfusion/after-dark/commits/b127eeb))



<a name="7.2.1"></a>
## [7.2.1](https://git.habd.as/comfusion/after-dark/compare/v7.2.0...v7.2.1) (2019-02-22)


### Bug Fixes

* **layout/default:** workaround hugo bug on eval len(nil) go tmpl ([258c747](https://git.habd.as/comfusion/after-dark/commits/258c747)), closes [#135](https://git.habd.as/comfusion/after-dark/issues/135)



<a name="7.2.0"></a>
# [7.2.0](https://git.habd.as/comfusion/after-dark/compare/v7.0.1...v7.2.0) (2019-02-20)


### Features

* **help/homepage:** update security featurette ([dcd0199](https://git.habd.as/comfusion/after-dark/commits/dcd0199))
* **layouts:** add rss with full content ([fe99466](https://git.habd.as/comfusion/after-dark/commits/fe99466))


<a name="7.1.0"></a>
# [7.1.0](https://git.habd.as/comfusion/after-dark/compare/v7.0.3...v7.1.0) (2019-02-18)


### Features

* **feature/security:** add content security policy ([de24354](https://git.habd.as/comfusion/after-dark/commits/de24354)

### Bug Fixes

<a name="7.0.3"></a>
## [7.0.3](https://git.habd.as/comfusion/after-dark/compare/v7.0.2...v7.0.3) (2019-02-12)

* **layout/default:** delegate module config to modules ([79f2a13](https://git.habd.as/comfusion/after-dark/commit/79f2a13))


### Bug Fixes

<a name="7.0.2"></a>
## [7.0.2](https://git.habd.as/comfusion/after-dark/compare/v7.0.1...v7.0.2) (2019-02-12)

* **feature/security:** restore gpg signing of commits and tags


<a name="7.0.1"></a>
## [7.0.1](https://git.habd.as/comfusion/after-dark/compare/v7.0.0...v7.0.1) (2019-02-10)


### Bug Fixes

* **partials/powered-by:** point to expected directory of refactored file ([f32207f](https://git.habd.as/comfusion/after-dark/commits/f32207f))



<a name="7.0.0"></a>
# [7.0.0](https://git.habd.as/comfusion/after-dark/compare/v6.16.1...v7.0.0) (2019-02-08)


### Bug Fixes

* **assets/css:** normalize base font-size, large screens ([862da61](https://git.habd.as/comfusion/after-dark/commits/862da61))


### Features

* **feature/section-menu:** add support for multiple nav menus ([427f9d2](https://git.habd.as/comfusion/after-dark/commits/427f9d2))
* **feature/table-of-contents:** add native smooth-scroll ([94b13a1](https://git.habd.as/comfusion/after-dark/commits/94b13a1)), closes [#43](https://git.habd.as/comfusion/after-dark/issues/43)


### BREAKING CHANGES

* **feature/section-menu:** removes disqus entirely, previously a deprecated feature



<a name="6.16.1"></a>
## [6.16.1](https://git.habd.as/comfusion/after-dark/compare/v6.16.0...v6.16.1) (2019-01-24)


### Bug Fixes

* **feature/post-images:** fix yandex validation error ([93cc90f](https://git.habd.as/comfusion/after-dark/commits/93cc90f))
* **feature/post-images:** zap extra whitespaces ([32767d9](https://git.habd.as/comfusion/after-dark/commits/32767d9))



<a name="6.16.0"></a>
# [6.16.0](https://git.habd.as/comfusion/after-dark/compare/v6.15.1...v6.16.0) (2019-01-23)


### Bug Fixes

* **assets/css:** normalize samp element font size with pre ([c42ccba](https://git.habd.as/comfusion/after-dark/commits/c42ccba))
* **assets/css:** normalize whitespace around toc when post images present ([c3f37a5](https://git.habd.as/comfusion/after-dark/commits/c3f37a5))


### Features

* **feature/fuzzy-search:** add aria landmark to search form ([7a9b75a](https://git.habd.as/comfusion/after-dark/commits/7a9b75a))
* **feature/post-images:** add image captions and structured data ([41f41e7](https://git.habd.as/comfusion/after-dark/commits/41f41e7))
* **feature/section-menu:** add support for html link decoration ([7634b42](https://git.habd.as/comfusion/after-dark/commits/7634b42))
* **shortcodes/external:** add shorthand usage for named anchors ([243d15a](https://git.habd.as/comfusion/after-dark/commits/243d15a))



<a name="6.15.1"></a>
## [6.15.1](https://git.habd.as/comfusion/after-dark/compare/v6.15.0...v6.15.1) (2018-12-28)



<a name="6.15.0"></a>
# [6.15.0](https://git.habd.as/comfusion/after-dark/compare/v6.14.0...v6.15.0) (2018-12-11)


### Bug Fixes

* **assets/theme:** normalize blockquote line-height with rest of document ([20ec883](https://git.habd.as/comfusion/after-dark/commits/20ec883))


### Features

* **layouts/shortcodes:** add grid and cell flexbox shortcode & snippet ([5bc322b](https://git.habd.as/comfusion/after-dark/commits/5bc322b)), closes [#67](https://git.habd.as/comfusion/after-dark/issues/67)
* **layouts/shortcodes:** add select shortcode, docs and example use ([71fff83](https://git.habd.as/comfusion/after-dark/commits/71fff83))



<a name="6.14.0"></a>
# [6.14.0](https://git.habd.as/comfusion/after-dark/compare/v6.13.5...v6.14.0) (2018-11-21)


### Features

* **layouts/*:** add cookie disclaimer ([e8d9f68](https://git.habd.as/comfusion/after-dark/commits/e8d9f68))



<a name="6.13.5"></a>
## [6.13.5](https://git.habd.as/comfusion/after-dark/compare/v6.13.4...v6.13.5) (2018-11-19)

* **package:** updated tagline and software purpose

<a name="6.13.4"></a>
## [6.13.4](https://git.habd.as/comfusion/after-dark/compare/v6.13.3...v6.13.4) (2018-11-05)


### Bug Fixes

* **assets/css:** normalize size of help text on small viewports ([bc0e33f](https://git.habd.as/comfusion/after-dark/commits/bc0e33f))


### Reverts

* **help/home:** disable button wrapped in anchor tag ([88e4b17](https://git.habd.as/comfusion/after-dark/commits/88e4b17))



<a name="6.13.3"></a>
## [6.13.3](https://git.habd.as/comfusion/after-dark/compare/v6.13.2...v6.13.3) (2018-10-18)


### Bug Fixes

* **archetypes/validate:** swap string method for sha trim behavior ([70e2c47](https://git.habd.as/comfusion/after-dark/commits/70e2c47)), closes [#90](https://git.habd.as/comfusion/after-dark/issues/90)
* **assets/css:** unset ua default figure element margin ([46326bf](https://git.habd.as/comfusion/after-dark/commits/46326bf))



<a name="6.13.2"></a>
## [6.13.2](https://git.habd.as/comfusion/after-dark/compare/v6.13.1...v6.13.2) (2018-10-15)


### Bug Fixes

* **shortcode/navmenu:** improve microdata semantics & add test tool to docs ([4913934](https://git.habd.as/comfusion/after-dark/commits/4913934)), closes [#100](https://git.habd.as/comfusion/after-dark/issues/100)



<a name="6.13.1"></a>
## [6.13.1](https://git.habd.as/comfusion/after-dark/compare/v6.13.0...v6.13.1) (2018-10-12)



<a name="6.13.0"></a>
# [6.13.0](https://git.habd.as/comfusion/after-dark/compare/v6.12.7...v6.13.0) (2018-10-05)


### Bug Fixes

* **layouts/partials:** add main menu display condition ([a8fb1cb](https://git.habd.as/comfusion/after-dark/commits/a8fb1cb)), closes [#78](https://git.habd.as/comfusion/after-dark/issues/78)
* **shortcodes/button:** allow name attribute & pass id as expected ([7aca084](https://git.habd.as/comfusion/after-dark/commits/7aca084))


### Features

* **module/toxic-swamp:** integrate module beta ([8f0bc30](https://git.habd.as/comfusion/after-dark/commits/8f0bc30))
* **shortcodes/button:** add custom class support ([eb8f2db](https://git.habd.as/comfusion/after-dark/commits/eb8f2db))



<a name="6.12.7"></a>
## [6.12.7](https://git.habd.as/comfusion/after-dark/compare/v6.12.6...v6.12.7) (2018-09-26)



<a name="6.12.6"></a>
## [6.12.6](https://git.habd.as/comfusion/after-dark/compare/v6.12.5...v6.12.6) (2018-09-25)



<a name="6.12.5"></a>
## [6.12.5](https://git.habd.as/comfusion/after-dark/compare/v6.12.4...v6.12.5) (2018-09-24)



<a name="6.12.4"></a>
## [6.12.4](https://git.habd.as/comfusion/after-dark/compare/v6.12.3...v6.12.4) (2018-09-23)


### Bug Fixes

* **help/home:** add missing query string param to search link ([5b842f4](https://git.habd.as/comfusion/after-dark/commits/5b842f4))



<a name="6.12.3"></a>
## [6.12.3](https://git.habd.as/comfusion/after-dark/compare/v6.12.2...v6.12.3) (2018-09-22)



<a name="6.12.2"></a>
## [6.12.2](https://git.habd.as/comfusion/after-dark/compare/v6.12.1...v6.12.2) (2018-09-22)



<a name="6.12.1"></a>
## [6.12.1](https://git.habd.as/comfusion/after-dark/compare/v6.12.0...v6.12.1) (2018-09-22)



<a name="6.12.0"></a>
# [6.12.0](https://git.habd.as/comfusion/after-dark/compare/v6.11.2...v6.12.0) (2018-09-22)


### Features

* **scripts/upgrade:** prompt for update if metadata cannot be found ([b3a62ff](https://git.habd.as/comfusion/after-dark/commits/b3a62ff))



<a name="6.11.2"></a>
## [6.11.2](https://git.habd.as/comfusion/after-dark/compare/v6.11.1...v6.11.2) (2018-09-22)


### Bug Fixes

* **scripts:** add || to server shutdown ([f834a0d](https://git.habd.as/comfusion/after-dark/commits/f834a0d))



<a name="6.11.1"></a>
## [6.11.1](https://git.habd.as/comfusion/after-dark/compare/v6.11.0...v6.11.1) (2018-09-22)


### Bug Fixes

* **onboarding:** add explicit site port setting in install script ([64fefb2](https://git.habd.as/comfusion/after-dark/commits/64fefb2))
* **onboarding:** serve site not help when starting site from installer ([384895b](https://git.habd.as/comfusion/after-dark/commits/384895b))



<a name="6.11.0"></a>
# [6.11.0](https://git.habd.as/comfusion/after-dark/compare/v6.10.1...v6.11.0) (2018-09-21)


### Features

* **onboarding:** streamline installation ([8a1cfee](https://git.habd.as/comfusion/after-dark/commits/8a1cfee))



<a name="6.10.1"></a>
## [6.10.1](https://git.habd.as/comfusion/after-dark/compare/v6.10.0...v6.10.1) (2018-09-19)


### Bug Fixes

* **help/home:** add performance info & undocumented features ([14c1faa](https://git.habd.as/comfusion/after-dark/commits/14c1faa))



<a name="6.10.0"></a>
# [6.10.0](https://git.habd.as/comfusion/after-dark/compare/v6.9.7...v6.10.0) (2018-09-14)


### Features

* **shortcodes:** add navmenu ([3e53c48](https://git.habd.as/comfusion/after-dark/commits/3e53c48)), closes [#78](https://git.habd.as/comfusion/after-dark/issues/78)



<a name="6.9.7"></a>
## [6.9.7](https://git.habd.as/comfusion/after-dark/compare/v6.9.6...v6.9.7) (2018-09-14)


### Bug Fixes

* **layouts/partials:** move navmenu snippet into theme ([e432e5c](https://git.habd.as/comfusion/after-dark/commits/e432e5c)), closes [#78](https://git.habd.as/comfusion/after-dark/issues/78)



<a name="6.9.6"></a>
## [6.9.6](https://git.habd.as/comfusion/after-dark/compare/v6.9.5...v6.9.6) (2018-09-12)


### Bug Fixes

* **archetypes:** fix broken links in post archetype ([9a46e86](https://git.habd.as/comfusion/after-dark/commits/9a46e86))



<a name="6.9.5"></a>
## [6.9.5](https://git.habd.as/comfusion/after-dark/compare/v6.9.4...v6.9.5) (2018-09-12)


### Bug Fixes

* **archetypes:** prevent internal links from opening in new window ([a5237a8](https://git.habd.as/comfusion/after-dark/commits/a5237a8))



<a name="6.9.4"></a>
## [6.9.4](https://git.habd.as/comfusion/after-dark/compare/v6.9.3...v6.9.4) (2018-09-12)


### Bug Fixes

* **archetypes:** close tag body on last external shortcode ([aa97ed3](https://git.habd.as/comfusion/after-dark/commits/aa97ed3))



<a name="6.9.3"></a>
## [6.9.3](https://git.habd.as/comfusion/after-dark/compare/v6.9.2...v6.9.3) (2018-09-12)


### Bug Fixes

* **scripts:** automatically stop running help servers on upgrade ([b6b9a56](https://git.habd.as/comfusion/after-dark/commits/b6b9a56))



<a name="6.9.2"></a>
## [6.9.2](https://git.habd.as/comfusion/after-dark/compare/v6.9.1...v6.9.2) (2018-09-12)


### Bug Fixes

* **archetypes:** default posts to display as published content ([b4fd2bf](https://git.habd.as/comfusion/after-dark/commits/b4fd2bf))



<a name="6.9.1"></a>
## [6.9.1](https://git.habd.as/comfusion/after-dark/compare/v6.9.0...v6.9.1) (2018-09-12)



<a name="6.9.0"></a>
# [6.9.0](https://git.habd.as/comfusion/after-dark/compare/v6.8.0...v6.9.0) (2018-09-12)


### Features

* **help:** multipage help docs ([0446f50](https://git.habd.as/comfusion/after-dark/commits/0446f50)), closes [#61](https://git.habd.as/comfusion/after-dark/issues/61)



<a name="6.8.0"></a>
# [6.8.0](https://git.habd.as/comfusion/after-dark/compare/v6.7.9...v6.8.0) (2018-09-08)


### Bug Fixes

* **components:** correct help block class attr behavior ([8336029](https://git.habd.as/comfusion/after-dark/commits/8336029))
* **help:** rename 404 to error page ([2191740](https://git.habd.as/comfusion/after-dark/commits/2191740))
* **layouts:** remove navmenu from help layout ([4934a0c](https://git.habd.as/comfusion/after-dark/commits/4934a0c))
* **partials:** make button onclick handler work as expected ([9998957](https://git.habd.as/comfusion/after-dark/commits/9998957))
* **shortcodes:** remove insignificant spaces after external links ([1190b94](https://git.habd.as/comfusion/after-dark/commits/1190b94))
* **shortcodes:** remove standard link treatment from figures ([abade6f](https://git.habd.as/comfusion/after-dark/commits/abade6f))
* **styles:** leftpad orderd lists ([579404e](https://git.habd.as/comfusion/after-dark/commits/579404e))


### Features

* **layouts/search:** and placeholder and allow basic customization ([e4df3a5](https://git.habd.as/comfusion/after-dark/commits/e4df3a5))
* **shortcodes:** add form attr to button ([f04ea28](https://git.habd.as/comfusion/after-dark/commits/f04ea28))
* **shortcodes:** add id attribute for forms ([10f1024](https://git.habd.as/comfusion/after-dark/commits/10f1024))
* **shortcodes:** add navmenu navigational aid ([aa46ed3](https://git.habd.as/comfusion/after-dark/commits/aa46ed3))
* **shortcodes:** add title attr to external ([ce451e4](https://git.habd.as/comfusion/after-dark/commits/ce451e4))
* **shortcodes:** add type attribute for external links ([d80b1f3](https://git.habd.as/comfusion/after-dark/commits/d80b1f3))
* **shortcodes:** add value attr to button ([fbf744e](https://git.habd.as/comfusion/after-dark/commits/fbf744e))
* **shortcodes:** allow anonymous blockquotes ([3ad1f04](https://git.habd.as/comfusion/after-dark/commits/3ad1f04))
* **shortcodes:** allow button disablement ([f145780](https://git.habd.as/comfusion/after-dark/commits/f145780)), closes [#65](https://git.habd.as/comfusion/after-dark/issues/65)
* **shortcodes:** trim whitespace in id attributes ([523b2a1](https://git.habd.as/comfusion/after-dark/commits/523b2a1))


### Performance Improvements

* **search:** increase specificity of v-cloak declaration ([35eed67](https://git.habd.as/comfusion/after-dark/commits/35eed67))



<a name="6.7.9"></a>
## [6.7.9](https://git.habd.as/comfusion/after-dark/compare/v6.7.8...v6.7.9) (2018-09-07)

### Bug Fixes

* **styles:** prevent jumping scrollbar in windows ([9d2beec](https://git.habd.as/comfusion/after-dark/commit/9d2beec93c72b6145507f850689eae3a64cf22f0)), closes #72 (thanks @tkalpakidis)

<a name="6.7.8"></a>
## [6.7.8](https://git.habd.as/comfusion/after-dark/compare/v6.7.7...v6.7.8) (2018-08-30)



<a name="6.7.7"></a>
## [6.7.7](https://git.habd.as/comfusion/after-dark/compare/v6.7.6...v6.7.7) (2018-08-27)


### Bug Fixes

* **help:** change 404 page to error page and improve script perf ([f95aaa3](https://git.habd.as/comfusion/after-dark/commits/f95aaa3)), closes [#43](https://git.habd.as/comfusion/after-dark/issues/43)



<a name="6.7.6"></a>
## [6.7.6](https://git.habd.as/comfusion/after-dark/compare/v6.7.5...v6.7.6) (2018-08-27)


### Bug Fixes

* **scripts:** always regnerate help docs ([90b0f21](https://git.habd.as/comfusion/after-dark/commits/90b0f21))



<a name="6.7.5"></a>
## [6.7.5](https://git.habd.as/comfusion/after-dark/compare/v6.7.4...v6.7.5) (2018-08-27)


### Bug Fixes

* **scripts:** resolve help doc path lookups when no custom content dir ([300add1](https://git.habd.as/comfusion/after-dark/commits/300add1))



<a name="6.7.4"></a>
## [6.7.4](https://git.habd.as/comfusion/after-dark/compare/v6.7.3...v6.7.4) (2018-08-27)


### Bug Fixes

* **scripts:** remove help before generating on upgrade ([56b7543](https://git.habd.as/comfusion/after-dark/commits/56b7543))



<a name="6.7.3"></a>
## [6.7.3](https://git.habd.as/comfusion/after-dark/compare/v6.7.2...v6.7.3) (2018-08-27)


### Bug Fixes

* **scripts:** address error generating docs after upgrade ([3119918](https://git.habd.as/comfusion/after-dark/commits/3119918))



<a name="6.7.2"></a>
## [6.7.2](https://git.habd.as/comfusion/after-dark/compare/v6.7.1...v6.7.2) (2018-08-27)


### Bug Fixes

* **scripts:** resolve tar cd issue ([5fa2591](https://git.habd.as/comfusion/after-dark/commits/5fa2591))



<a name="6.7.1"></a>
## [6.7.1](https://git.habd.as/comfusion/after-dark/compare/v6.7.0...v6.7.1) (2018-08-27)


### Bug Fixes

* **scripts:** resolve syntax bugs in script ([f7bfb04](https://git.habd.as/comfusion/after-dark/commits/f7bfb04))



<a name="6.7.0"></a>
# [6.7.0](https://git.habd.as/comfusion/after-dark/compare/v6.6.4...v6.7.0) (2018-08-27)


### Bug Fixes

* **scripts:** update install to place theme metadata in theme data folder ([66168a1](https://git.habd.as/comfusion/after-dark/commits/66168a1)), closes [#59](https://git.habd.as/comfusion/after-dark/issues/59)


### Features

* **scripts:** add theme upgrade script ([6415250](https://git.habd.as/comfusion/after-dark/commits/6415250)), closes [#59](https://git.habd.as/comfusion/after-dark/issues/59)
* **scripts:** support custom content dirs in config file ([adf90bc](https://git.habd.as/comfusion/after-dark/commits/adf90bc)), closes [#59](https://git.habd.as/comfusion/after-dark/issues/59)



<a name="6.6.4"></a>
## [6.6.4](https://git.habd.as/comfusion/after-dark/compare/v6.6.3...v6.6.4) (2018-08-27)

### Security

* **build:** enclose release tag sha512 in delimeters
([543d32d](https://git.habd.as/comfusion/after-dark/commit/543d32d))

<a name="6.6.3"></a>
## [6.6.3](https://git.habd.as/comfusion/after-dark/compare/v6.6.1...v6.6.3) (2018-08-27)

### Security

* **build:** append sha512 to release tag and self-sign
([112f616](https://git.habd.as/comfusion/after-dark/commits/112f616))

<a name="6.6.2"></a>
## [6.6.2](https://git.habd.as/comfusion/after-dark/compare/v6.6.1...v6.6.2) (2018-08-26)

### Security

* **build:** add sha512 digest to git tags and gpg sign them
([35457ab](https://git.habd.as/comfusion/after-dark/commits/35457ab))

<a name="6.6.1"></a>
## [6.6.1](https://git.habd.as/comfusion/after-dark/compare/v6.6.0...v6.6.1) (2018-08-26)


### Bug Fixes

* **snippets:** reverse logic for external link styling ([0fcf238](https://git.habd.as/comfusion/after-dark/commits/0fcf238))



<a name="6.6.0"></a>
# [6.6.0](https://git.habd.as/comfusion/after-dark/compare/v6.5.2...v6.6.0) (2018-08-25)


### Features

* **help:** update and run help anytime using included script ([206bfdc](https://git.habd.as/comfusion/after-dark/commits/206bfdc))
* **snippets:** add external link snippet ([7c885f3](https://git.habd.as/comfusion/after-dark/commits/7c885f3)), closes [#48](https://git.habd.as/comfusion/after-dark/issues/48)



<a name="6.5.2"></a>
## [6.5.2](https://git.habd.as/comfusion/after-dark/compare/v6.5.1...v6.5.2) (2018-08-24)


### Bug Fixes

* **install:** wait 1 second before serving help for docs to expire ([8e9e312](https://git.habd.as/comfusion/after-dark/commits/8e9e312))



<a name="6.5.1"></a>
## [6.5.1](https://git.habd.as/comfusion/after-dark/compare/v6.5.0...v6.5.1) (2018-08-24)


### Bug Fixes

* **install:** remove unexpected line in theme config ([a5eb197](https://git.habd.as/comfusion/after-dark/commits/a5eb197))



<a name="6.5.0"></a>
# [6.5.0](https://git.habd.as/comfusion/after-dark/compare/v6.4.1...v6.5.0) (2018-08-24)


### Bug Fixes

* **install:** stop copying all archetypes to site ([210412b](https://git.habd.as/comfusion/after-dark/commits/210412b)), closes [#45](https://git.habd.as/comfusion/after-dark/issues/45)


### Features

* **install:** faux install validation using npm sha512 digest ([5a8dec0](https://git.habd.as/comfusion/after-dark/commits/5a8dec0)), closes [#33](https://git.habd.as/comfusion/after-dark/issues/33)
* **snippets:** alert user on invalid autocomplete value ([1105e20](https://git.habd.as/comfusion/after-dark/commits/1105e20)), closes [#46](https://git.habd.as/comfusion/after-dark/issues/46)



<a name="6.4.1"></a>
## [6.4.1](https://git.habd.as/comfusion/after-dark/compare/v6.4.0...v6.4.1) (2018-08-22)



<a name="6.4.0"></a>
# [6.4.0](https://git.habd.as/comfusion/after-dark/compare/v6.3.0...v6.4.0) (2018-08-20)


### Bug Fixes

* **install:** remove useful snippets content ([c224977](https://git.habd.as/comfusion/after-dark/commits/c224977))


### Features

* **install:** provide welcome post with online help ([c8f729a](https://git.habd.as/comfusion/after-dark/commits/c8f729a))



<a name="6.3.0"></a>
# [6.3.0](https://git.habd.as/comfusion/after-dark/compare/v6.2.0...v6.3.0) (2018-08-19)


### Bug Fixes

* **snippets:** add name attribute to form ([078ee4d](https://git.habd.as/comfusion/after-dark/commits/078ee4d))


### Features

* **install:** add installation challenge ([9b6106c](https://git.habd.as/comfusion/after-dark/commits/9b6106c))



<a name="6.2.0"></a>
# [6.2.0](https://git.habd.as/comfusion/after-dark/compare/v6.1.1...v6.2.0) (2018-08-18)


### Bug Fixes

* **bin:** remove preview script ([5ac1c12](https://git.habd.as/comfusion/after-dark/commits/5ac1c12)), closes [#38](https://git.habd.as/comfusion/after-dark/issues/38)
* **layouts:** stop outputting trim color if none present ([fe58bed](https://git.habd.as/comfusion/after-dark/commits/fe58bed))


### Features

* **layouts:** provide form builder snippets ([c49d086](https://git.habd.as/comfusion/after-dark/commits/c49d086))



<a name="6.1.1"></a>
## [6.1.1](https://git.habd.as/comfusion/after-dark/compare/v6.1.0...v6.1.1) (2018-08-14)


### Bug Fixes

* **personalization:** rename accent color to trim color ([88cd373](https://git.habd.as/comfusion/after-dark/commits/88cd373))



<a name="6.1.0"></a>
# [6.1.0](https://git.habd.as/comfusion/after-dark/compare/v6.0.1...v6.1.0) (2018-08-13)


### Bug Fixes

* **layouts:** move inline-level content in navs inside <p> ([1b0187d](https://git.habd.as/comfusion/after-dark/commits/1b0187d))


### Features

* **personalization:** add customizable accent colors ([bf251a6](https://git.habd.as/comfusion/after-dark/commits/bf251a6))



<a name="6.0.1"></a>
## [6.0.1](https://git.habd.as/comfusion/after-dark/compare/v6.0.0...v6.0.1) (2018-08-12)


### Bug Fixes

* **layouts/search:** unblock blocking scripts and add command terminators ([7802937](https://git.habd.as/comfusion/after-dark/commits/7802937)), closes [#14](https://git.habd.as/comfusion/after-dark/issues/14)



<a name="6.0.0"></a>
# [6.0.0](https://git.habd.as/comfusion/after-dark/compare/v5.5.1...v6.0.0) (2018-08-12)


### Bug Fixes

* **shortcodes:** remove privacytube and coub shortcodes ([ada8286](https://git.habd.as/comfusion/after-dark/commits/ada8286)), closes [#35](https://git.habd.as/comfusion/after-dark/issues/35)


### BREAKING CHANGES

* **shortcodes:** shortcodes removed must now be copied to the theme, if used



<a name="5.5.1"></a>
## [5.5.1](https://git.habd.as/comfusion/after-dark/compare/v5.5.0...v5.5.1) (2018-08-11)


### Bug Fixes

* **install:** restore android support ([d3b2ab0](https://git.habd.as/comfusion/after-dark/commits/d3b2ab0)), closes [#25](https://git.habd.as/comfusion/after-dark/issues/25)



<a name="5.5.0"></a>
# [5.5.0](https://git.habd.as/comfusion/after-dark/compare/v5.4.0...v5.5.0) (2018-08-10)


### Bug Fixes

* **assets:** stop treating all permalinks as external ([d5e8e33](https://git.habd.as/comfusion/after-dark/commits/d5e8e33))


### Features

* **layout,install:** add automatic syntax highlighting ([3eed5dd](https://git.habd.as/comfusion/after-dark/commits/3eed5dd))



<a name="5.4.0"></a>
# [5.4.0](https://git.habd.as/comfusion/after-dark/compare/v5.3.1...v5.4.0) (2018-08-04)


### Features

* **modules:** add hall of mirrors ([882c32d](https://git.habd.as/comfusion/after-dark/commits/882c32d)), closes [#24](https://git.habd.as/comfusion/after-dark/issues/24)



<a name="5.3.1"></a>
## [5.3.1](https://git.habd.as/comfusion/after-dark/compare/v5.3.0...v5.3.1) (2018-08-01)


### Bug Fixes

* **layouts:** show sarcastic message when no pages exist ([e5ce3b9](https://git.habd.as/comfusion/after-dark/commits/e5ce3b9))



<a name="5.3.0"></a>
# [5.3.0](https://git.habd.as/comfusion/after-dark/compare/v5.2.6...v5.3.0) (2018-08-01)


### Bug Fixes

* **install:** kill hugo server always ([abadfbf](https://git.habd.as/comfusion/after-dark/commits/abadfbf))
* **install:** move kill command to eof ([a87a381](https://git.habd.as/comfusion/after-dark/commits/a87a381))


### Features

* **bin:** add script to preview site online over https ([51baf0c](https://git.habd.as/comfusion/after-dark/commits/51baf0c)), closes [#21](https://git.habd.as/comfusion/after-dark/issues/21)



<a name="5.2.6"></a>
## [5.2.6](https://git.habd.as/comfusion/after-dark/compare/v5.2.5...v5.2.6) (2018-07-31)


### Bug Fixes

* **install:** support both gnu and bsd grep ([35defb7](https://git.habd.as/comfusion/after-dark/commits/35defb7))



<a name="5.2.5"></a>
## [5.2.5](https://git.habd.as/comfusion/after-dark/compare/v5.2.3...v5.2.5) (2018-07-31)


### Bug Fixes

* **install:** install packages from npm ([65c4e99](https://git.habd.as/comfusion/after-dark/commits/65c4e99))
* **install:** standardize install script ([aca07cc](https://git.habd.as/comfusion/after-dark/commits/aca07cc)), closes [#19](https://git.habd.as/comfusion/after-dark/issues/19)
* **install:** update example base url ([da73a2f](https://git.habd.as/comfusion/after-dark/commits/da73a2f))
* **install:** use latest version from npm dist tags ([7afe7b9](https://git.habd.as/comfusion/after-dark/commits/7afe7b9))



<a name="5.2.4"></a>
## [5.2.4](https://git.habd.as/comfusion/after-dark/compare/v5.2.3...v5.2.4) (2018-07-31)


### Bug Fixes

* **install:** install packages from npm ([65c4e99](https://git.habd.as/comfusion/after-dark/commits/65c4e99))
* **install:** standardize install script ([aca07cc](https://git.habd.as/comfusion/after-dark/commits/aca07cc)), closes [#19](https://git.habd.as/comfusion/after-dark/issues/19)



<a name="5.2.3"></a>
## [5.2.3](https://git.habd.as/comfusion/after-dark/compare/v5.2.2...v5.2.3) (2018-07-29)

### Bug Fixes

* **theme:** just kidding. remove white theme variant ([d73693c](https://git.habd.as/comfusion/after-dark/commits/d73693c))

<a name="5.2.2"></a>
## [5.2.2](https://git.habd.as/comfusion/after-dark/compare/v5.2.1...v5.2.2) (2018-07-29)


### Bug Fixes

* **theme:** enable white theme variant ([3f8f000](https://git.habd.as/comfusion/after-dark/commits/3f8f000))



<a name="5.2.1"></a>
## [5.2.1](https://git.habd.as/comfusion/after-dark/compare/v5.2.0...v5.2.1) (2018-07-26)


### Bug Fixes

* **install:** remove git cruft & supply actual module name ([a0097a0](https://git.habd.as/comfusion/after-dark/commits/a0097a0))



<a name="5.2.0"></a>
# [5.2.0](https://git.habd.as/comfusion/after-dark/compare/v5.1.0...v5.2.0) (2018-07-26)


### Features

* **install:** streamline installation ([abf92fe](https://git.habd.as/comfusion/after-dark/commits/abf92fe)), closes [#2](https://git.habd.as/comfusion/after-dark/issues/2)



<a name="5.1.0"></a>
# [5.1.0](https://git.habd.as/comfusion/after-dark/compare/v5.0.0...v5.1.0) (2018-07-24)


### Features

* **modules:** add fractal forest module for bpg image format support ([8aa35b2](https://git.habd.as/comfusion/after-dark/commits/8aa35b2)), closes [#8](https://git.habd.as/comfusion/after-dark/issues/8)



<a name="5.0.0"></a>
# [5.0.0](https://git.habd.as/comfusion/after-dark/compare/v4.1.0...v5.0.0) (2018-07-21)


### Features

* **modules:** add analytics module ([9334f15](https://git.habd.as/comfusion/after-dark/commits/9334f15)), closes [#1](https://git.habd.as/comfusion/after-dark/issues/1)


### BREAKING CHANGES

* **modules:** google analytics no longer supported



<a name="4.1.0"></a>
# [4.1.0](https://git.habd.as/comfusion/after-dark/compare/v4.0.2...v4.1.0) (2018-07-19)


### Features

* select theme variant directly from site config ([aa82f5d](https://git.habd.as/comfusion/after-dark/commit/aa82f5d)), closes [#6](https://git.habd.as/comfusion/after-dark/issues/6)


### BREAKING CHANGES

* hugo 0.43 and above required. css override file locations have changed



<a name="4.0.2"></a>
## 4.0.2 (2018-07-18)


### Bug Fixes

* **install:** update default open graph image ([aaaf64e](https://git.habd.as/comfusion/after-dark/commit/aaaf64e))
* **layouts:** output urls relative to baseurl ([2d278dd](https://git.habd.as/comfusion/after-dark/commit/2d278dd)), closes [#4](https://git.habd.as/comfusion/after-dark/issues/4)
* **layouts:** restore smooth scrolling to toc links ([89a9c8d](https://git.habd.as/comfusion/after-dark/commit/89a9c8d))



<a name="4.0.1"></a>
## [4.0.1](https://git.habd.as/comfusion/after-dark/compare/v4.0.0...v4.0.1) (2018-07-18)


### Bug Fixes

* **hugo:** require 0.44 at minimum ([78a09c8](https://git.habd.as/comfusion/after-dark/commits/78a09c8))



<a name="4.0.0"></a>
# [4.0.0](https://git.habd.as/comfusion/after-dark/compare/v3.10.1...v4.0.0) (2018-07-09)



<a name="3.10.1"></a>
## [3.10.1](https://git.habd.as/comfusion/after-dark/compare/v3.10.0...v3.10.1) (2018-07-09)



<a name="3.10.0"></a>
# [3.10.0](https://github.com/comfusion/after-dark/compare/v3.9.1...v3.10.0) (2018-06-18)


### Bug Fixes

* **$layouts:** resolve search layout header display ([9eee69c](https://github.com/comfusion/after-dark/commit/9eee69c)), closes [#104](https://github.com/comfusion/after-dark/issues/104)


### Features

* **$layout:** add telegram iv support ([4d520f9](https://github.com/comfusion/after-dark/commit/4d520f9)), closes [#113](https://github.com/comfusion/after-dark/issues/113)



<a name="3.9.2"></a>
## [3.9.2](https://github.com/comfusion/after-dark/compare/v3.9.1...v3.9.2) (2018-06-09)


### Bug Fixes

* **$layouts:** resolve search layout header display ([9eee69c](https://github.com/comfusion/after-dark/commit/9eee69c)), closes [#104](https://github.com/comfusion/after-dark/issues/104)



<a name="3.9.1"></a>
## [3.9.1](https://github.com/comfusion/after-dark/compare/v3.9.0...v3.9.1) (2018-05-13)


### Bug Fixes

* **$layouts:** hide search app when noscript ([c3bcff0](https://github.com/comfusion/after-dark/commit/c3bcff0))



<a name="3.9.0"></a>
# [3.9.0](https://github.com/comfusion/after-dark/compare/v3.8.4...v3.9.0) (2018-05-03)


### Features

* **$layouts:** allow customization of referrer policy and add privacy-focused default ([5759a30](https://github.com/comfusion/after-dark/commit/5759a30)), closes [#96](https://github.com/comfusion/after-dark/issues/96)



<a name="3.8.4"></a>
## [3.8.4](https://github.com/comfusion/after-dark/compare/v3.8.3...v3.8.4) (2018-05-01)


### Bug Fixes

* **$layouts:** prevent js error on search form submit ([0dce741](https://github.com/comfusion/after-dark/commit/0dce741)), closes [#94](https://github.com/comfusion/after-dark/issues/94)



<a name="3.8.3"></a>
## [3.8.3](https://github.com/comfusion/after-dark/compare/v3.8.2...v3.8.3) (2018-04-16)


### Bug Fixes

* **$layouts:** improve search input focus and usability ([e94f6df](https://github.com/comfusion/after-dark/commit/e94f6df)), closes [#91](https://github.com/comfusion/after-dark/issues/91)



<a name="3.8.2"></a>
## [3.8.2](https://github.com/comfusion/after-dark/compare/v3.8.1...v3.8.2) (2018-04-16)


### Bug Fixes

* **$layouts:** disable ua input styling safari mobile ([f7c81f4](https://github.com/comfusion/after-dark/commit/f7c81f4))
* **$layouts:** prevent auto-zoom on safari mobile ([81c3f39](https://github.com/comfusion/after-dark/commit/81c3f39))



<a name="3.8.1"></a>
## [3.8.1](https://github.com/comfusion/after-dark/compare/v3.8.0...v3.8.1) (2018-04-15)


### Bug Fixes

* **$layouts:** remove duplicate descriptor from post image srcset ([0295370](https://github.com/comfusion/after-dark/commit/0295370))



<a name="3.8.0"></a>
# [3.8.0](https://github.com/comfusion/after-dark/compare/v3.7.0...v3.8.0) (2018-04-15)


### Features

* **$layouts:** add fuzzy search ([93d2a29](https://github.com/comfusion/after-dark/commit/93d2a29)), closes [#83](https://github.com/comfusion/after-dark/issues/83)



<a name="3.7.0"></a>
# [3.7.0](https://github.com/comfusion/after-dark/compare/v3.6.0...v3.7.0) (2018-03-25)


### Features

* **$layouts:** add post images ([06457bc](https://github.com/comfusion/after-dark/commit/06457bc))



<a name="3.6.0"></a>
# [3.6.0](https://github.com/comfusion/after-dark/compare/v3.5.1...v3.6.0) (2018-03-22)


### Bug Fixes

* **$style:** add more whitespace on list pages and darken muted text ([646e98b](https://github.com/comfusion/after-dark/commit/646e98b))


### Features

* **$layouts:** add twitter cards ([6562e80](https://github.com/comfusion/after-dark/commit/6562e80)), closes [#76](https://github.com/comfusion/after-dark/issues/76)



<a name="3.5.1"></a>
## [3.5.1](https://github.com/comfusion/after-dark/compare/v3.5.0...v3.5.1) (2018-01-17)


### Bug Fixes

* **$style:** fix a whitespace issue near the readmore link ([dee3530](https://github.com/comfusion/after-dark/commit/dee3530)), closes [#70](https://github.com/comfusion/after-dark/issues/70)



<a name="3.5.0"></a>
# [3.5.0](https://github.com/comfusion/after-dark/compare/v3.4.0...v3.5.0) (2017-11-08)


### Features

* **$shortcodes:** add youtube without cookies ([613e545](https://github.com/comfusion/after-dark/commit/613e545)), closes [#62](https://github.com/comfusion/after-dark/issues/62)



<a name="3.4.0"></a>
# [3.4.0](https://github.com/comfusion/after-dark/compare/v3.3.0...v3.4.0) (2017-10-27)


### Features

* **$shortcode:** add coub shortcode for gifs with sound ([0267d5b](https://github.com/comfusion/after-dark/commit/0267d5b)), closes [#63](https://github.com/comfusion/after-dark/issues/63)



<a name="3.3.0"></a>
# [3.3.0](https://github.com/comfusion/after-dark/compare/v3.2.0...v3.3.0) (2017-10-13)


### Features

* **$layouts:** hide related content reading time on small screen ([480d57a](https://github.com/comfusion/after-dark/commit/480d57a))
* **$partials:** add pubdate structured data to post byline ([a3bcb0c](https://github.com/comfusion/after-dark/commit/a3bcb0c))



<a name="3.2.0"></a>
# [3.2.0](https://github.com/comfusion/after-dark/compare/v3.1.1...v3.2.0) (2017-10-06)


### Bug Fixes

* **$shortcodes:** fix issue with external link appearance ([afcc8e6](https://github.com/comfusion/after-dark/commit/afcc8e6))


### Features

* **$layout:** add base element to base layout ([bf25c67](https://github.com/comfusion/after-dark/commit/bf25c67)), closes [#60](https://github.com/comfusion/after-dark/issues/60)
* **$shortcode:** style cite element inside block quotation ([65a4278](https://github.com/comfusion/after-dark/commit/65a4278))
* **$shortcodes:** add frame targeting to custom figure shortcode ([a66b076](https://github.com/comfusion/after-dark/commit/a66b076))
* **$shortcodes:** enable target and method control for button/buttongroup ([f705d19](https://github.com/comfusion/after-dark/commit/f705d19)), closes [#56](https://github.com/comfusion/after-dark/issues/56)
* **$shortcodes:** make button shortcode clickable ([1bc643f](https://github.com/comfusion/after-dark/commit/1bc643f)), closes [#40](https://github.com/comfusion/after-dark/issues/40)


### Reverts

* **$layout:** add base element to base layout ([769e2d9](https://github.com/comfusion/after-dark/commit/769e2d9))



<a name="3.1.1"></a>
## [3.1.1](https://github.com/comfusion/after-dark/compare/v3.1.0...v3.1.1) (2017-09-13)


### Bug Fixes

* **$layouts:** fix error calling partial in related content ([8a6253d](https://github.com/comfusion/after-dark/commit/8a6253d)), closes [#55](https://github.com/comfusion/after-dark/issues/55)



<a name="3.1.0"></a>
# [3.1.0](https://github.com/comfusion/after-dark/compare/v3.0.0...v3.1.0) (2017-09-13)


### Features

* **$layouts:** use related content feature introduced in hugo@0.27 ([f0474f4](https://github.com/comfusion/after-dark/commit/f0474f4)), closes [#54](https://github.com/comfusion/after-dark/issues/54)



<a name="3.0.0"></a>
# [3.0.0](https://github.com/comfusion/after-dark/compare/v2.1.1...v3.0.0) (2017-09-13)


### Features

* **$archetypes:** turn archetypes into go templates ([5ed2d9f](https://github.com/comfusion/after-dark/commit/5ed2d9f))

### BREAKING CHANGES

* **$archetypes:** Minimum Hugo version set 0.24, 0.16 - 0.23 must modify archetypes

to upgrade add `date` and `title` to custom archetypes. if using a version of hugo prior to 0.24 the custom templates should remove `title` and `date` and not use go templating logic in the archetype files



<a name="2.1.1"></a>
## [2.1.1](https://github.com/comfusion/after-dark/compare/v2.1.0...v2.1.1) (2017-09-11)


### Bug Fixes

* **$layouts:** move stylesheets back to partials, reorganize files ([b93b4a7](https://github.com/comfusion/after-dark/commit/b93b4a7)), closes [#50](https://github.com/comfusion/after-dark/issues/50)



<a name="2.1.0"></a>
# [2.1.0](https://github.com/comfusion/after-dark/compare/v2.0.0...v2.1.0) (2017-09-09)


### Bug Fixes

* **$images:** improve bpg image support ([7681dde](https://github.com/comfusion/after-dark/commit/7681dde)), closes [#48](https://github.com/comfusion/after-dark/issues/48)


### Features

* **$layout:** Add support for external stylesheets ([9abe627](https://github.com/comfusion/after-dark/commit/9abe627)), closes [#49](https://github.com/comfusion/after-dark/issues/49)



<a name="2.0.0"></a>
# [2.0.0](https://github.com/comfusion/after-dark/compare/v1.8.4...v2.0.0) (2017-09-08)


### Features

* **$theme:** add support for bpg image format ([49204d0](https://github.com/comfusion/after-dark/commit/49204d0))

### BREAKING CHANGES

* **$build:** inline css using readFile template function ([3787d10](https://github.com/comfusion/after-dark/commit/3787d10))

to upgrade skip this release and move directly to 2.1.1 or a later release

<a name="1.8.4"></a>
## [1.8.4](https://github.com/comfusion/after-dark/compare/v1.8.3...v1.8.4) (2017-06-27)


### Bug Fixes

* **$layouts:** add support for protocol-relative base urls ([755f446](https://github.com/comfusion/after-dark/commit/755f446)), closes [#37](https://github.com/comfusion/after-dark/issues/37)



<a name="1.8.3"></a>
## [1.8.3](https://github.com/comfusion/after-dark/compare/v1.8.2...v1.8.3) (2017-06-22)


### Bug Fixes

* **$layouts:** remove iframe borders by default ([3b4f7c1](https://github.com/comfusion/after-dark/commit/3b4f7c1))



<a name="1.8.2"></a>
## [1.8.2](https://github.com/comfusion/after-dark/compare/v1.8.1...v1.8.2) (2017-06-09)


### Reverts

* **layouts:** update powered-by to link to new theme site ([2237ead](https://github.com/comfusion/after-dark/commit/2237ead))



<a name="1.8.1"></a>
## [1.8.1](https://github.com/comfusion/after-dark/compare/v1.8.0...v1.8.1) (2017-06-07)


### Bug Fixes

* **$layouts:** update powered-by to link to new theme site ([c031934](https://github.com/comfusion/after-dark/commit/c031934))



<a name="1.8.0"></a>
# [1.8.0](https://github.com/comfusion/after-dark/compare/v1.7.6...v1.8.0) (2017-06-06)


### Features

* **LICENSE:** you just do what the fuck you want to ([c2eb957](https://github.com/comfusion/after-dark/commit/c2eb957))



<a name="1.7.6"></a>
## [1.7.6](https://github.com/comfusion/after-dark/compare/v1.7.2...v1.7.6) (2017-06-06)

#### Licensing

Upgraded to The Unlicense, skipping for patch releases.

<a name="1.7.2"></a>
## [1.7.2](https://github.com/comfusion/after-dark/compare/v1.7.1...v1.7.2) (2017-05-14)


### Bug Fixes

* **install:** move it back to bin ([13441f5](https://github.com/comfusion/after-dark/commit/13441f5))



<a name="1.7.1"></a>
## [1.7.1](https://github.com/comfusion/after-dark/compare/v1.7.0...v1.7.1) (2017-05-13)


### Bug Fixes

* **install:** move to scripts folder ([204e516](https://github.com/comfusion/after-dark/commit/204e516))



<a name="1.7.0"></a>
# [1.7.0](https://github.com/comfusion/after-dark/compare/v1.6.1...v1.7.0) (2017-05-08)


### Bug Fixes

* **install:** improve install experience ([4a30955](https://github.com/comfusion/after-dark/commit/4a30955))


### Features

* **shortcodes:** add hack progress bar component ([dda60f2](https://github.com/comfusion/after-dark/commit/dda60f2))
* **shortcodes:** add hackcss alert shortcode ([6ed1c58](https://github.com/comfusion/after-dark/commit/6ed1c58))
* **shortcodes:** add hackcss alert shortcode ([eebe7a9](https://github.com/comfusion/after-dark/commit/eebe7a9))
* **shortcodes:** add hackcss button group component ([1f90e2d](https://github.com/comfusion/after-dark/commit/1f90e2d))
* **shortcodes:** add hackcss button shortcode ([829cb7d](https://github.com/comfusion/after-dark/commit/829cb7d))
* **shortcodes:** add hackcss card component ([4526c60](https://github.com/comfusion/after-dark/commit/4526c60))
* **shortcodes:** add hackcss loading component ([6f667e8](https://github.com/comfusion/after-dark/commit/6f667e8))
* **shortcodes:** add hackcss progress component ([4e99c75](https://github.com/comfusion/after-dark/commit/4e99c75))



<a name="1.6.1"></a>
## [1.6.1](https://github.com/comfusion/after-dark/compare/v1.6.0...v1.6.1) (2017-05-05)


### Bug Fixes

* **typography:** remove text justification and hyphenation ([8fdbe2f](https://github.com/comfusion/after-dark/commit/8fdbe2f))



<a name="1.6.0"></a>
# [1.6.0](https://github.com/comfusion/after-dark/compare/v1.5.2...v1.6.0) (2017-05-03)


### Bug Fixes

* **install:** add flags for theme setup script ([01ad1ee](https://github.com/comfusion/after-dark/commit/01ad1ee))
* **layouts:** use relative urls in post byline taxonomy links ([419752d](https://github.com/comfusion/after-dark/commit/419752d))


### Features

* **install:** simplify installation ([765dcb8](https://github.com/comfusion/after-dark/commit/765dcb8))



<a name="1.5.2"></a>
## [1.5.2](https://github.com/comfusion/after-dark/compare/v1.5.1...v1.5.2) (2017-04-30)


### Bug Fixes

* **typography:** only justify and hyphenate article bodies ([ed83bee](https://github.com/comfusion/after-dark/commit/ed83bee))



<a name="1.5.1"></a>
## [1.5.1](https://github.com/comfusion/after-dark/compare/v1.5.0...v1.5.1) (2017-04-20)


### Bug Fixes

* **typography:** stop justifying and hyphenating text on small viewports ([77c6033](https://github.com/comfusion/after-dark/commit/77c6033))



<a name="1.5.0"></a>
# [1.5.0](https://github.com/comfusion/after-dark/compare/v1.4.0...v1.5.0) (2017-04-16)


### Bug Fixes

* **links:** style external links in all browsers ([ccef559](https://github.com/comfusion/after-dark/commit/ccef559)), closes [#22](https://github.com/comfusion/after-dark/issues/22)
* **partials:** fix markup validation error ([c82fc66](https://github.com/comfusion/after-dark/commit/c82fc66))


### Features

* **layouts:** add support for hugo 0.20.2 ([eba70c9](https://github.com/comfusion/after-dark/commit/eba70c9)), closes [#28](https://github.com/comfusion/after-dark/issues/28)
* **typography:** justify text output and hyphenate ([4775618](https://github.com/comfusion/after-dark/commit/4775618))


### Performance Improvements

* **favicon:** add svg favicon ([b3b0008](https://github.com/comfusion/after-dark/commit/b3b0008))
* **install:** remove design resources ([6eb145d](https://github.com/comfusion/after-dark/commit/6eb145d))


### Reverts

* **docs(README:** remove erroneous markdown file): ([925ed3e](https://github.com/comfusion/after-dark/commit/925ed3e))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/comfusion/after-dark/compare/v1.3.2...v1.4.0) (2017-04-10)


### Features

* **layouts:** add meta keywords to base template ([4b1f0f1](https://github.com/comfusion/after-dark/commit/4b1f0f1)), closes [#20](https://github.com/comfusion/after-dark/issues/20)



<a name="1.3.2"></a>
## [1.3.2](https://github.com/comfusion/after-dark/compare/v1.3.1...v1.3.2) (2017-04-09)


### Bug Fixes

* **layouts:** output meta description when not explicitly set ([9f11bd6](https://github.com/comfusion/after-dark/commit/9f11bd6)), closes [#21](https://github.com/comfusion/after-dark/issues/21)



<a name="1.3.1"></a>
## [1.3.1](https://github.com/comfusion/after-dark/compare/v1.3.0...v1.3.1) (2017-04-08)


### Bug Fixes

* **bundle:** add images to npm ignore file ([1694334](https://github.com/comfusion/after-dark/commit/1694334))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/comfusion/after-dark/compare/v1.2.0...v1.3.0) (2017-04-08)


### Bug Fixes

* **bundle:** remove images folder from npm release ([b277a20](https://github.com/comfusion/after-dark/commit/b277a20))


### Features

* **powered-by:** add page generation date ([c0c421a](https://github.com/comfusion/after-dark/commit/c0c421a))


### Reverts

* **powered-by:** remove page generation date ([478ba0b](https://github.com/comfusion/after-dark/commit/478ba0b))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/comfusion/after-dark/compare/v1.1.0...v1.2.0) (2017-03-30)


### Features

* **highlighting:** add syntax highlighting ([455062f](https://github.com/comfusion/after-dark/commit/455062f))
* **shortcodes:** add figure shortcode ([8a0317f](https://github.com/comfusion/after-dark/commit/8a0317f))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/comfusion/after-dark/compare/v1.0.0...v1.1.0) (2017-03-30)


### Features

* **shortcodes:** add blockquote shortcode ([ea293e3](https://github.com/comfusion/after-dark/commit/ea293e3))



<a name="1.0.0"></a>
# 1.0.0 (2017-03-30)


### Bug Fixes

* 404 page theme color url ref ([79d2377](https://github.com/comfusion/after-dark/commit/79d2377))
* add add theme color to 404 page ([4f5ec87](https://github.com/comfusion/after-dark/commit/4f5ec87))
