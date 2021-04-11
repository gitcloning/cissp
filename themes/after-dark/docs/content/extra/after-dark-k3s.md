+++
title = "After Dark K3s"
date = 2019-06-27T16:00:54+08:00
description = "Run containerized in a lightweight Kubernetes cluster."
categories = ["devops"]
keywords = ["cloud", "container", "k3s", "k8s", "kubernetes"]
features = ["code highlighter", "snippets"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark K3s pairs {{< external "https://k3s.io" "K3s" />}} with {{< external "https://www.nginx.com" "Nginx" />}} enabling you to scale After Dark using container orchestration in a low-friction, efficient multi-tier deployment. Use it to self-host, and automatically build and serve your site in real-time.

{{% hackcss-alert type="success" %}}**Tip:** Learn how to get wildcard SSL certificates (with auto-renewal) using K3s and Traefik in {{< external "https://plaindark.com/post/how-to-ssl-with-letsencrypt-and-kubernetes-traefik/" "Wildcard Let's Encrypt certs on Kubernetes with Traefik" />}}.{{% /hackcss-alert %}}

# Benefits

- Isolates published site inside a container.
- Uses <abbr title="Inversion of Control">IoC</abbr> pattern to remove Hugo dependency.
- Doubles as a web server and reverse proxy.
- 75% more memory efficient than Kubernetes.
- Native support for ARM devices, ideal for <abbr title="Internet of Things">IoT</abbr>.
- Manage set-up using Configuration as Code.
- Integrate with {{< external "https://traefik.io/" "Traefik" />}} for <abbr title="High Availability">HA</abbr> front-ends.

**Repository:** {{< external "https://git.habd.as/teowood/after-dark-k3s-amd64" />}}
<br>**Mirror:** {{< external "https://git.plaindark.com/teowood/after-dark-k3s-amd64" />}}
