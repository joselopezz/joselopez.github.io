---
layout: post
title:  "Instalando Ghost en local y en un Mac"
author: jose
categories: [ Ghost ]
tags: [ CMS ]
image: assets/images/ghost_cms.png
---

Lo primero que haremos es dirigirnos a la web oficial [ghost.org](https://ghost.org/) y [descargar](https://ghost.org/download/) la versión más reciente. El archivo en cuestión se trata de un archivo comprimido que una vez descargado, descomprimiremos y lo pondremos, por ejemplo en la raíz del disco duro.

A través del terminal no dirigimos a esa ubicación.
```md
cd ghost
```
Procederemos a instalarlo.
```md
npm install --production
```
Después lo arrancaremos, ya en local.
```md
npm start
```
Nos indicará que ya está operativo en la dirección **127.0.0.1:2368**

Lo primero que haremos será crear una cuenta de administrador (**127.0.0.1:2368/admin**) y ya podemos empezar a bloguear en local …


