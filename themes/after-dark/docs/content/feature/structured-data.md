+++
title = "Structured Data"
description = "Give search engines rich info about site structure."
categories = ["search"]
tags = ["metadata", "semantics", "robots", "SEO"]
features = ["related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark generates structured metadata using {{< external "https://schema.org" />}} specifications for [Custom Homepage](../custom-homepage), [Related Content](../related-content/), [Featured Posts](../featured-posts), [Section Menu](../section-menu), [Image Galleries](/module/hall-of-mirrors) and adapts data automatically using author-defined [Post Bylines](../post-bylines) as shown here:

Schema Property | Frontmatter Value
--------------- | -----------------
author?         | `author`
datePublished   | `publishdate` or `date`
articleSection  | `categories`

[Post Images]({{< relref "post-images" >}}) use {{< external "https://gohugo.io/content-management/page-resources/#page-resources-metadata" "Page Resources Metadata" />}} to add image captions:

Schema Property | Header Image Resource Metadata
--------------- | ----------------
caption?        | `creator` [`sameas` domain] or `caption`

Consider adding structured data when creating [Custom Layouts](../custom-layouts) for improved page semantics and better SEO.

Learn more about structured data using the following resources:

- {{< external href="https://www.w3.org/TR/microdata/" text="HTML Microdata on W3C" />}}
- {{< external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Microdata" text="Microdata on MDN" />}}
- {{< external href="https://moz.com/learn/seo/schema-structured-data" text="Schema Structured Data on Moz" />}}


Use [Webmaster Tools](../webmaster-tools/) to validate structured data. This can be done from a development machine using [Ephemeral Hosting](../ephemeral-hosting/).
