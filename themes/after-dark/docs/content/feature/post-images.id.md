+++
title = "Post Images"
description = "menambahkan gambar ke postingan tanpa menyentuh editor gambar."
categories = ["experience"]
tags = ["performance", "imaging", "graphics", "posts"]
feature = ["code highlighter", "snippets", "related content"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

Tambahkan daya tarik visual ke postingan anda dengan memposting gambar. Gambar postingan muncul diatas konten postingan dan pengaruh {{< external href="https://gohugo.io/content-management/image-processing/" text="Hugo Image Processing" />}} dan [Lazy Loading](../lazy-loading) untuk menyediakan gambar yang sepenuhnya otomatis dan lazy-loaded <abbr title="Low-Quality Image Placeholders">LQIP</abbr> dan arah seni bawaan.

{{< figure
  src="https://source.unsplash.com/Y-w15LfHO8w/1200x900"
  lqipsrc="https://source.unsplash.com/Y-w15LfHO8w/800x600"
  caption="Be Creative. Photo:"
  attr="AK¥N Cakiner on Unsplash"
  attrlink="https://unsplash.com/@akin"
>}}

Menggunakan gambar postingan memerlukan beberapa pendapat terkait dengan struktur konten anda. Untuk membuat postingan dengan gambar posting anda harus:

1. Gabungkan gambar dan konten dalam direktori seperti yang ditunjukan di bawah ini.
2. Perbarui postingan {{< external href="https://gohugo.io/content-management/front-matter/" text="Front Matter" />}} seperti yang dijelaskan dibawah ini.

Contoh bundel halaman mungkin akan terlihat seperti berikut ini:

```
├── archetypes
├── content
│   └── post
│       └── secure-your-digital-life
│           ├── images
│           │   └── florian-klauer-119557-unsplash.jpg
│           └── index.md
├── layouts
```

Dengan gambar `header` yang ditunjukkan di `index.md`:

```toml
[[resources]]
  src = "images/*119557*"
  name = "header"
```

{{% hackcss-alert type="info" %}}**Tip:** Orientasi tidak signifikan. Untuk tampilan optimal gunakan gambar yang lebih besar.{{% /hackcss-alert %}}

Itu dia! After Dark melakukan hal selebihnya.

Untuk membantu memahami bundel, lihat {{< external href="https://gohugo.io/content-management/page-bundles/" text="Page Bundles in Hugo" />}}.
