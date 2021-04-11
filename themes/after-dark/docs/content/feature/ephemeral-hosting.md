+++
title = "Ephemeral Hosting"
description = "Briefly expose your site to the Internet over SSH with encryption."
categories = ["security"]
tags = ["privacy", "networking"]
features = ["related content", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Using {{< external href="https://serveo.net" text="Serveo" />}} you may briefly expose your site to the Internet with end-to-end encryption, no sign-up required. Use this to [Work Offline]({{< relref "work-offline" >}}) and quietly poke a hole through your NAT or firewall to move information more discretely.

{{% hackcss-alert type="warning" %}}**Warning:** No form of communication over the Internet is 100% secure.{{% /hackcss-alert %}}

Serve and expose your site with the following command:

```sh
$ hugo serve --disableLiveReload & ssh -R 80:localhost:1313 serveo.net
```

Once started press `g` for traffic inspection, or quit to go offline and use `fg` to return to `hugo`. Install {{< external href="https://matt.ucc.asn.au/dropbear/dropbear.html" text="dropbear" />}} or {{< external href="https://www.openssh.com" text="openssh" />}} if you need `ssh`.
