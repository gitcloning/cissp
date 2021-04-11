{{/*
Copyright (C) 2019  Josh Habdas <jhabdas@protonmail.com>

This file is part of After Dark.

After Dark is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

After Dark is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/ -}}

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
