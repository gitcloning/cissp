+++
title = "Section Menu"
description = "Menampilkan navigasi site-wide kontekstual dengan tautan."
categories = ["navigation"]
tags = ["links", "taxonomy"]
feature = ["code highlighter", "snippets", "section menu"]
notes = [
  "meninjau contoh 'fuzzy-search' jika dimodifikasi"
]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark menggunakan Hugo's {{< external href="https://gohugo.io/templates/menu-templates/#section-menu-for-lazy-bloggers" text="Section Menu for “Lazy” Bloggers" />}} untuk membuat bantuan navigasi di seluruh situs. Menu bagian dinonaktifkan secara default.

{{< hackcss-card header="Interactive Example" >}}
  {{< navmenu >}}
{{< /hackcss-card >}}

Aktifkan itu dengan mengubah pengaturan `show_menu` dalam konfigurasi situs anda:

```toml
[params]
  show_menu = false # atur ke `true` untuk mengaktifkan menu bagian
```

Dengan menu yang diaktifkan, tautan navigasi akan mulai muncul secara otomatis di setiap bagian saat {{< external href="https://gohugo.io/getting-started/usage/#draft-future-and-expired-content" text="Published Content" />}} tersedia dalam bagian itu.

Tautan ke halaman yang berdiri sendiri dari {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}} dengan menentukan `menu = "main"`:

```toml
title = "About"
menu = "main"
```

Sesuaikan nama tautan dan posisi menu dengan menambahkan kode blok berikut ke {{< external href="https://gohugo.io/getting-started/configuration/" text="Site Configuration" />}} anda dan memodifikasinya untuk memenuhi kebutuhan anda:

```toml
[[menu.main]]
  name = "Home"
  weight = 1
  identifier = "home"
  url = "/"

[[menu.main]]
  name = "Posts"
  weight = 2
  identifier = "post"
  url = "/post/"
```

Lihat {{< external href="https://gohugo.io/content-management/menus/" text="Menus in Hugo" />}} untuk informasi tambahan.
