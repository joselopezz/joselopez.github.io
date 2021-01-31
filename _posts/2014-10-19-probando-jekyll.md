---
layout: post
title:  "Probando Jekyll"
author: jose
categories: [ Jekyll ]
tags: [ CMS ]
image: assets/images/octojekyll.png
---

Primero de todo, decir que [Jekyll](http://jekyllrb.com/) es un parser programado en Ruby que se utiliza para bloguear en estático.

Lo primero que hay que hacer es instalarlo en el ordenador
```md
$ gem install jekyll
```
Después crearemos una carpeta donde vamos alojar localmente el blog.
```md
$ jekyll new my-awesome-site

$ cd my-awesome-site
```
Y después arrancamos el serve
```md
/my-awesome-site $ jekyll serve
```
Si todo va bien, Jekyll generará todo y te dará una URL donde ver el sitio generado, en mi caso es **http://0.0.0.0:4000**, que a posteriori podemos hospedar en [Github Pages](https://pages.github.com/).
