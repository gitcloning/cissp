+++
title = "Search" # title of the page
layout = "search" # sets the layout to use
noindex = true # tell robots not to index
[form]
  helpblock = "Press <kbd>/</kbd> or <kbd>s</kbd> to modify your search."
  hotkeys = ["/", "s"]
[form.input]
  placeholder = "uzzy searvh"
  disabled = false
[security.csp.directives]
  scriptSrc = [
    "'sha512-6G7cmlXR4eLBphfUmmEWLEnLWSEtZPdKP2xv7bXZ8D3LReZazwxcwb4tTx2HeCeoAChG5ZCE+UqHmbe3K4xoJg=='",
    "'unsafe-eval'"
  ]
+++
