+++
title = "Code Highlighter"
description = "Highlight code written in more than 160 languages."
categories = ["experience"]
tags = ["color", "style", "syntax"]
features = ["snippets", "related content", "jit requests"]
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

After Dark uses a customized version of {{< external href="https://atom.io/themes/one-dark-syntax" text="One Dark Syntax" />}} to produce print-friendly code highlighting for more than 160 languages.

<style>.card-content .inner { overflow: scroll; height: 200px; }</style>
{{< hackcss-card header="Supported Languages" text="ABNF, ANTLR, APL, ActionScript, ActionScript 3, Ada, Angular2, ApacheConf, AppleScript, Arduino, Awk, BNF, Ballerina, Base Makefile, Bash, Batchfile, BlitzBasic, Brainfuck, C, C#, C++, CFEngine3, CMake, COBOL, CSS, Cap'n Proto, Ceylon, ChaiScript, Cheetah, Clojure, CoffeeScript, Common Lisp, Coq, Crystal, Cython, DTD, Dart, Diff, Django/Jinja, Docker, EBNF, Elixir, Elm, EmacsLisp, Erlang, FSharp, Factor, Fish, Forth, Fortran, GAS, GDScript, GLSL, Genshi, Genshi HTML, Genshi Text, Gnuplot, Go, Go HTML Template, Go Text Template, Graphql, Groovy, HTML, HTTP, Handlebars, Haskell, Haxe, Hexdump, Hy, INI, Idris, Io, JSON, JSX, Java, JavaScript, Julia, Kotlin, LLVM, Lighttpd configuration file, Lua, Mako, Mason, Mathematica, Matlab, MiniZinc, Modula-2, MorrowindScript, MySQL, Myghty, NASM, Newspeak, Nginx configuration file, Nim, Nix, OCaml, Objective-C, Octave, Org Mode, PHP, PL/pgSQL, POVRay, PacmanConf, Perl, Pig, PkgConfig, PostScript, PostgreSQL SQL dialect, PowerShell, Prolog, Protocol Buffer, Puppet, Python, Python 3, QBasic, R, Racket, Ragel, Rexx, Ruby, Rust, SCSS, SPARQL, SQL, Sass, Scala, Scheme, Scilab, Smalltalk, Smarty, Snobol, Solidity, SquidConf, Swift, TASM, TOML, Tcl, Tcsh, TeX, Termcap, Terminfo, Terraform, Thrift, Transact-SQL, Turing, Turtle, Twig, TypeScript, TypoScript, TypoScriptCssData, TypoScriptHtmlData, VHDL, VimL, WDTE, XML, Xorg, YAML, cfstatement, markdown, reStructuredText, reg, systemverilog, verilog" />}}

To activate the highlighter indicate the {{< external href="https://gohugo.io/content-management/syntax-highlighting/#list-of-chroma-highlighting-languages" text="highlighting language" />}} in a fenced code block within your markdown:

````
```go-html-template
<div class="alert {{ with .type }}alert-{{ . }}{{ end }}">
  {{ .body }}
</div>
```
````

Resulting in the following highlighted code:

```go-html-template
<div class="alert {{ with .type }}alert-{{ . }}{{ end }}">
  {{ .body }}
</div>
```

Or use the {{% external href="https://gohugo.io/content-management/syntax-highlighting/#highlight-shortcode" %}}highlight shortcode{{% /external %}} provided by Hugo:

```html
{{</* highlight python */>}}
@app.on_message(Filters.private)
def hello(client, message):
    message.reply_text("Hello {}".format(message.from_user.first_name))
{{</* /highlight */>}}
```

To add line numbers and highlighting:

{{< highlight python "linenos=inline,linenostart=5,hl_lines=2" >}}
@app.on_message(Filters.private)
def hello(client, message):
    message.reply_text("Hello {}".format(message.from_user.first_name))
{{< /highlight >}}

Not feeling the colors? No problem. Use the `hugo gen chromastyles` command to {{< external href="https://gohugo.io/content-management/syntax-highlighting/#generate-syntax-highlighter-css" text="generate your own" />}} `syntax.css` stylesheet from the {{< external href="https://help.farbox.com/pygments.html" text="style gallery" />}} and customize it using the general-purpose {{< external href="https://git.habd.as/comfusion/atom-one-chroma" text="Atom One Chroma" />}} syntax theme-roller.

And if you're really enterprising why not create some executable ASCII art representing the name of the game you implemented in the language used:

```brainfuck

                           Linus Akesson presents:
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

       Type for instance "fg" to toggle the cell at row f and column g
                  Hit enter to calculate the next generation
                                Type q to quit

```

That really is Brainfuck.
