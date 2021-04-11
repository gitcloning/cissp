+++
title = "Index Blocking"
description = "Define pages to prevent them from appearing in search."
categories = ["search"]
tags = ["links", "search", "robots", "metadata"]
features = ["code highlighter", "related content", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark uses the `noindex` robots meta directive to prevent search engines from crawling and indexing certain parts of your site. It appears in the HTML document `head` and looks like this:

```html
<meta name="robots" content="noindex">
```

Unlike {{< external href="http://www.robotstxt.org" text="robots.txt" />}} meta directives are defined within page content itself and unambiguously indicate which, if any, pages should be blocked from indexing — even if some of those pages appear in your site's {{< external href="https://gohugo.io/templates/sitemap-template/" text="Sitemap" />}}.

To facilitate the discovery of index blocked pages [Fuzzy Search](../fuzzy-search) utilizes the very same meta directive exposed to search engines to prevent disclosure of pages in its own result listings. Therefore, if a page can be found in fuzzy search, that page may ultimately appear on a search engine result page.

Adjust index blocking per-page using `noindex` {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}}:

```toml
noindex = true # set false or remove to unblock
```

Block entire sections using an `_index.md` file with the above setting:

```
├── content
│   ├── legal
│   │   ├── _index.md
│   │   ├── terms.md
│   │   └── privacy.md
│   ├── post
```

By default the following page types are blocked automatically:

- Section listings automatically linked to from the [Section Menu](../section-menu);
- [Taxonomy Pages](../taxonomy-pages) such as `Category`, `Tag` and terms listings; and,
- If enabled, the [Fuzzy Search](../fuzzy-search) page or any deep-linked result within.

Adjust defaults using the `noindex_kinds` setting from {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}}. For example, to enable crawling of section pages add the following to the config:

```toml
[params]
  noindex_kinds = [
    "taxonomy",
    "taxonomyTerm"
  ] # crawl "section" pages
```

Learn about {{< external href="https://moz.com/learn/seo/robots-meta-directives" text="Robots Meta Directives on Moz" />}} and see how Google uses `noindex` in {{< external href="https://support.google.com/webmasters/answer/93710" text="Block search indexing with 'noindex'" />}}.
