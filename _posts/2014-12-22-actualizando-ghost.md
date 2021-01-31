---
layout: post
title:  "Actualizando Ghost"
author: jose
categories: [ Ghost ]
tags: [ CMS ]
image: assets/images/Ghost.png
---

Ha salido una nueva versión de Ghost y queremos actualizar. ¿Qué tenemos que hacer? Pues muy fácil, primero descargaremos la última versión de [Ghost](https://ghost.org/download/) y la descomprimiremos. Después subimos el contenido al servidor donde tenemos alojado nuestro blog y sustituiremos los archivos. Lo único que no vamos a subir es la carpeta **content**, que es la que posee el contenido de nuestro blog y el theme que usamos.

Después procedemos a instalarlo vía terminal,
```md
npm install --production
```
y a arrancarlo.
```md
npm start
```
Y ya tenemos el blog operativo y actualizado a la última versión. 


