+++
title = "Trim Color"
description = "Define the color used to display borders around your site."
categories = ["customizing"]
tags = ["color", "style", "branding"]
features = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Trim color can sometimes affect how a browser or OS chooses to display borders and accent colors for your site. In {{< external href="https://brave.com/" text="Brave" />}}, for example, adjusting trim color affects stylizes the location bar. Set a trim color to customize this behavior.

The default trim color is automatically set to background color of the currently selected [Skin Style](../skin-styles). Override the default in your [Custom Styles](../custom-styles) by declaring the `--trim-color` variable inside a `:root` selector at the top of the file:

{{< highlight css "linenos=inline" >}}
:root {
  --trim-color: firebrick;
}
{{< /highlight >}}

Reuse the variable to maintain consistency throughout your custom styles:

{{< highlight css "linenos=inline,linenostart=4" >}}
nav a.active {
  background-color: var(--trim-color);
}
{{< /highlight >}}

See {{< external href="https://devdocs.io/css/using_css_variables" text="Using CSS variables" />}} for help using CSS variables.
