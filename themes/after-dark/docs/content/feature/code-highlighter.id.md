+++
title = "Code Highlighter"
description = "Kode sorot ditulis lebih dari 160 bahasa."
categories = ["experience"]
tags = ["color", "style", "syntax"]
feature = ["snippets", "related content", "jit requests"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark menggunakan versi yang disesuaikan {{< external href="https://atom.io/themes/one-dark-syntax" text="One Dark Syntax" />}} untuk menghasilkan kode yang ramah cetak untuk lebih dari 160 bahasa.

<style>.card-content .inner { overflow: scroll; height: 200px; }</style>
{{< hackcss-card header="Supported Languages" text="ABNF, ANTLR, APL, ActionScript, ActionScript 3, Ada, Angular2, ApacheConf, AppleScript, Awk, BNF, Ballerina, Base Makefile, Bash, Batchfile, BlitzBasic, Brainfuck, C, C#, C++, CFEngine3, CMake, COBOL, CSS, Cap'n Proto, Ceylon, ChaiScript, Cheetah, Clojure, CoffeeScript, Common Lisp, Coq, Crystal, Cython, DTD, Dart, Diff, Django/Jinja, Docker, EBNF, Elixir, Elm, EmacsLisp, Erlang, FSharp, Factor, Fish, Forth, Fortran, GAS, GDScript, GLSL, Genshi, Genshi HTML, Genshi Text, Gnuplot, Go, Go HTML Template, Go Text Template, Groovy, HTML, HTTP, Handlebars, Haskell, Haxe, Hexdump, Hy, INI, Idris, Io, JSON, JSX, Java, JavaScript, Julia, Kotlin, LLVM, Lighttpd configuration file, Lua, Mako, Mason, Mathematica, MiniZinc, Modula-2, MorrowindScript, MySQL, Myghty, NASM, Newspeak, Nginx configuration file, Nim, Nix, OCaml, Objective-C, Octave, Org Mode, PHP, PL/pgSQL, POVRay, PacmanConf, Perl, Pig, PkgConfig, PostScript, PostgreSQL SQL dialect, PowerShell, Prolog, Protocol Buffer, Puppet, Python, Python 3, QBasic, R, Racket, Ragel, Rexx, Ruby, Rust, SCSS, SPARQL, SQL, Sass, Scala, Scheme, Scilab, Smalltalk, Smarty, Snobol, Solidity, SquidConf, Swift, TASM, TOML, Tcl, Tcsh, TeX, Termcap, Terminfo, Terraform, Thrift, Transact-SQL, Turtle, Twig, TypeScript, TypoScript, TypoScriptCssData, TypoScriptHtmlData, VHDL, VimL, WDTE, XML, Xorg, YAML, cfstatement, markdown, reStructuredText, reg, systemverilog, verilog" />}}

Untuk mengaktifkan highlighter gunakan Hugo {{% external href="https://gohugo.io/content-management/syntax-highlighting/#highlight-shortcode" %}}`highlight` shortcode{{% /external %}} atau menunjukkan {{< external href="https://gohugo.io/content-management/syntax-highlighting/#list-of-chroma-highlighting-languages" text="highlighting language" />}} di blok kode berpagar di dalam markdown anda:

````
```go-html-template
<div class="alert {{ with .type }}alert-{{ . }}{{ end }}">
  {{ .body }}
</div>
```
````

Menghasilkan kode yang dihighlight seperti berikut:

```go-html-template
<div class="alert {{ with .type }}alert-{{ . }}{{ end }}">
  {{ .body }}
</div>
```

Atau gunakan shortcode highlight yang disediakan oleh Hugo:

Atau gabungkan {{% external href="https://gohugo.io/content-management/syntax-highlighting/#highlight-shortcode" %}}highlight shortcode{{% /external %}} disediakan oleh Hugo:

```html
{{</* highlight python */>}}
@app.on_message(Filters.private)
def hello(client, message):
    message.reply_text("Hello {}".format(message.from_user.first_name))
{{</* /highlight */>}}
```

Untuk menambahkan nomor baris dan sorotan:

{{< highlight python "linenos=inline,linenostart=5,hl_lines=2" >}}
@app.on_message(Filters.private)
def hello(client, message):
    message.reply_text("Hello {}".format(message.from_user.first_name))
{{< /highlight >}}

Tidak menyukai warnanya? Tidak masalah. Gunakan perintah `hugo gen chromastyles` untuk {{< external href="https://gohugo.io/content-management/syntax-highlighting/#generate-syntax-highlighter-css" text="generate your own" />}} `syntax.css` stylesheet dari {{< external href="https://help.farbox.com/pygments.html" text="style gallery" />}} dan menyesuaikannya menggunakan tujuan umum {{< external href="https://git.habd.as/comfusion/atom-one-chroma" text="Atom One Chroma" />}} tema rol sintaks.

Dan jika anda benar-benar berani berusaha mengapa tidak membuat beberapa seni ASCII yang dapat dieksekusi yang mewakili nama permainan yang anda implementasikan dalam bahasa yang digunakan:

```brainfuck

                           Linus Akesson mempersembahkan:
                  The Game Of Life implemented in Brainfuck

       +>>++++[<++++>-]<[<++++++>-]+[<[>>>>+<<<<-]>>>>[<<<<+>>>>>>+<<-]<+
   +++[>++++++++<-]>.[-]<+++[>+++<-]>+[>>.+<<-]>>[-]<<<++[<+++++>-]<.<<[>>>>+
 <<<<-]>>>>[<<<<+>>>>>>+<<-]<<[>>>>.+<<<++++++++++[<[>>+<<-]>>[<<+>>>>>++++++++
 +++<<<-]<[>+<-]>[<+>>>>+<<<-]>>>[>>>>>>>>>>>>+>+<<     <<<<<<<<<<<-]>>>>>>>>>>
>>[-[>>>>+<<<<-]>[>>>>+<<<<-]>>>]>      >>[<<<+>>  >-    ]<<<[>>+>+<<<-]>[->[<<<
<+>>>>-]<[<<<  <+>      >>>-]<<<< ]<     ++++++  ++       +[>+++++<-]>>[<<+>>-]<
<[>---<-]>.[- ]         <<<<<<<<< <      <<<<<< <         -]++++++++++.[-]<-]>>>
>[-]<[-]+++++           +++[>++++        ++++<     -     ]>--.[-]<,----------[<+
>-]>>>>>>+<<<<< <     <[>+>>>>>+>[      -]<<<      <<   <<-]>++++++++++>>>>>[[-]
<<,<<<<<<<->>>> >    >>[<<<<+>>>>-]<<<<[>>>>+      >+<<<<<-]>>>>>----------[<<<<
<<<<+<[>>>>+<<<      <-]>>>>[<<<<+>>>>>>+<<-      ]>[>-<-]>++++++++++[>+++++++++
++<-]<<<<<<[>>>      >+<<<<-]>>>>[<<<<+>>>>>      >+<<-]>>>>[<<->>-]<<++++++++++
[>+<-]>[>>>>>>>      >>>>>+>+<<<<      <<<<<      <<<<-]>>> >>     >>>>>>>[-[>>>
>+<<<<-]>[>>>>       +<<<<-]>> >       ]>> >           [<< <        +>>>-]+<<<[>
>>-<<<-]>[->[<      <<<+>>>>-]         <[ <            < <           <+>>>>-]<<<
<]<<<<<<<<<<<, [    -]]>]>[-+++        ++               +    +++     ++[>+++++++
++++>+++++++++ +    +<<-]>[-[>>>      +<<<-      ]>>>[ <    <<+      >>>>>>>+>+<
<<<<-]>>>>[-[> >    >>+<<<<-]>[>      >>>+< <    <<-]> >    >]>      >>[<<<+>>>-
]<<<[>>+>+<<< -     ]>[->[<<<<+>      >>>-] <    [<<< <    +>>       >>-]<<<<]<<
<<<<<<[>>>+<< <     -]>>>[<<<+>>      >>>>> +    >+<< <             <<-]<<[>>+<<
-]>>[<<+>>>>>      >+>+<<<<<-]>>      >>[-[ >    >>>+ <            <<<-]>[>>>>+<
<<<-]>[>>>>+<      <<<-]>>]>>>[ -    ]<[>+< -    ]<[ -           [<<<<+>>>>-]<<<
<]<<<<<<<<]<<      <<<<<<<<++++ +    +++++  [   >+++ +    ++++++[<[>>+<<-]>>[<<+
>>>>>++++++++ +    ++<<<     -] <    [>+<- ]    >[<+ >    >>>+<<<-]>>>[<<<+>>>-]
<<<[>>>+>>>>  >    +<<<<     <<      <<-]> >    >>>>       >>>[>>+<<-]>>[<<+<+>>
>-]<<<------ -    -----[     >>      >+<<< -    ]>>>       [<<<+> > >>>>>+>+<<<<
<-]>>>>[-[>> >    >+<<<<    -] >     [>>>> +    <<<<-       ]>>> ]  >>>[<<<+>>>-
]<<<[>>+>+<< <    -]>>>     >>           > >    [<<<+               >>>-]<<<[>>>
+<<<<<+>>-                  ]>           >     >>>>>[<             <<+>>>-]<<<[>
>>+<<<<<<<                  <<+         >      >>>>>-]<          <<<<<<[->[<<<<+
>>>>-]<[<<<<+>>>>-]<<<<]>[<<<<<<    <+>>>      >>>>-]<<<<     <<<<<+++++++++++[>
>>+<<<-]>>>[<<<+>>>>>>>+>+<<<<<-]>>>>[-[>     >>>+<<<<-]>[>>>>+<<<<-]>>>]>>>[<<<
+>>>-]<<<[>>+>+<<<-]>>>>>>>[<<<+>>>-]<<<[     >>>+<<<<<+>>-]>>>>>>>[<<<+>>>-]<<<
[>>>+<<<<<<<<<+>>>>>>-]<<<<<<<[->[< <  <     <+>>>>-]<[<<<<+>>>>-]<<<<]>[<<<<<<<
+>>>>>>>-]<<<<<<<<<+++++++++++[>>> >        >>>+>+<<<<<<<<-]>>>>>>>[-[>>>>+<<<<-
]>[>>>>+<<<<-]>>>]>>>[<<<+>>>-]<<< [       >>+>+<<<-]>>>>>>>[<<<+>>>-]<<<[>>>+<<
<<<+>>-]>>>>>>>[<<<+>>>-]<<<[>>>+<        <<<<<<<<+>>>>>>-]<<<<<<<[->[<<<<+>>>>-
 ]<[<<<<+>>>>-]<<<<]>[<<<<<<<+>>>>>      >>-]<<<<<<<----[>>>>>>>+<<<<<<<+[>>>>>
 >>-<<<<<<<[-]]<<<<<<<[>>>>>>>>>>>>+>+<<<<<<<<<<<<<-][   lft@df.lth.se   ]>>>>>
   >>>>>>>[-[>>>>+<<<<-]>[>>>>+<<<<-]>[>>>>+<<<<-]>>]>>>[-]<[>+<-]<[-[<<<<+>>
       >>-]<<<<]<<<<<<[-]]<<<<<<<[-]<<<<-]<-]>>>>>>>>>>>[-]<<]<<<<<<<<<<]

       Sebagai contoh, ketik "fg" untuk menghidupkan sel di baris f dan kolom g
                  Tekan enter untuk menghitung generasi berikutnya
                                Ketik q untuk berhenti

```

Itu benar-benar Brainfuck.
