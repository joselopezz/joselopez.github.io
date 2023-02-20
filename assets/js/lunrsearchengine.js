
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about",
    "title": "Acerca de mi",
    "body": "Me llamo José y soy un apasionado de la informática, de los diseños minimalistas, de la programación, la electrónica y la impresión 3d. Inquietudes a las que le dedico mi tiempo libre, siempre desde una perspectiva autodidacta. En este especio intentaré documentar todas aquellas cosas que me interesan con el objetivo de mostrarlas, que no se me olviden y seguir aprendiendo. Este blog está construido en Jekyll y alojado en GitHub. "
    }, {
    "id": 2,
    "url": "/authors",
    "title": "Authors",
    "body": "{% for author in site. authors %}                       {% if author[1]. gravatar %}                {% else %}                {% endif %}                  {% if author[1]. web %}                       {% endif %}          {% if author[1]. twitter %}                      {% endif %}          {% if author[1]. email %}                      {% endif %}                                     {{ author[1]. display_name }}:         {{ author[1]. description }}                {% endfor %}"
    }, {
    "id": 3,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "/contact",
    "title": "Contacto",
    "body": "Puedes contactar conmigo a través de:  Email: soy@jose. ga XMPP: jose@suchat. org Twitter: @joselopez_ga"
    }, {
    "id": 5,
    "url": "/",
    "title": "Home",
    "body": "  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "/page2/",
    "title": "Home",
    "body": "  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 8,
    "url": "/page3/",
    "title": "Home",
    "body": "  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 9,
    "url": "/compilar-dosbox-x-en-trisquel/",
    "title": "Compilar DOSBox-X en Trisquel",
    "body": "2023/02/20 - Paso realizados para compilar DOSBox-X (fork de DOSBox - emulador de MS-DOS) en Trisquel, por si le interesa a alguien … $ d= /tmp/dosbox-x $ sudo apt update$ sudo apt install automake git gcc g++ make libncurses-dev nasm libsdl-net1. 2-dev libsdl2-net-dev libpcap-dev fluidsynth libfluidsynth-dev libavdevice58 libavformat-dev libavcodec-dev libavcodec-extra libavcodec-extra58 libswscale-dev libfreetype6-dev libxkbfile-dev libxrandr-dev -y$ git clone  https://github. com/joncampbell123/dosbox-x  $d$ cd $d$ bash build-debug-sdl2$ sudo make install"
    }, {
    "id": 10,
    "url": "/instalar-node-js-y-npm-en-mac/",
    "title": "Instalar NodeJs y NPM en MacOS",
    "body": "2022/02/20 - Para instalar NodeJs y NPM en Mac necesitamos el gestor de paquetes Homebrew. Si no disponemos de él lo instalaremos escribiendo el siguiente código en la Terminal:  /bin/bash -c “$(curl -fsSL https://raw. githubusercontent. com/Homebrew/install/HEAD/install. sh)” Una vez dispongamos del Homebrew procedemos a instalar NodeJs y NPM escribiendo en la Terminal lo siguiente:  brew install node Para comprobar que todo ha ido bien y la versión instalada utilizaremos:  node -v ó npm -v Más comandos …: Para actualizar NodeJs:  brew update  brew upgrade node Para desinstalar NodeJs  brew uninstall node Y esto es todo lo que quería contar :) "
    }, {
    "id": 11,
    "url": "/sPictrum/",
    "title": "Carcasa réplica Zx Spectrum + ZXBaremulator + Raspberry Pi 3A+",
    "body": "2021/02/13 - Llevaba tiempo con ganas de hacer este proyecto. De hecho tenía todos los materiales comprados hacía tiempo pero lo fuí demorando porque aún no tenía nada claro como sujetar de un modo elegante y seguro la raspberry pi en el interior del Spectrum. Pero hace poco ví en Youtube varios vídeos de David programa y en uno de ellos se muestra como hizo un proyecto como este, compartiendo unas magníficas piezas en formatos STL y OpenSCAD del soporte de la Raspberry Pi 3A+ para el spectrum. &lt;/p&gt; ¿De qué se trata? De ejecutar el emulador bare-metal ZXBareMulator, creación de José Luis Sánchez, en una Raspberry Pi. Un programa bare-metal es aquel que no necesita cargar primero un sistema operativo para funcionar. La carga es instantánea y emula maravillosamente el ZX Spectrum 48K/128K/+2A. Haciendo uso de una carcasa de Spectrum 48K y teniendo su teclado operativo, conectando su membrana al GPIO de la RPi, la sensación que se tiene es la de tener entre las manos un verdadero gomas :) . Al final he montado una Raspberry Pi 3A+ dentro de la carcasa de un Spectrum, conectando la membrana del teclado al GPIO del RPi, para ejecutar el emulador bare-metal ZXBareMulator de José Luis Sánchez y tener un Spectrum con los juegos en la tarjeta de memoria y la posibilidad de conectar a un monitor por HDMI. Pasos realizados en imagenes Aquí podéis ver la carcasa réplica del gomas, la membrana, el teclado, la chapa superior y los conectores de la membrana. Todos estos productos los compré en su día en retocables. es Detalle de las piezas diseñadas por David para sujetar la RPi en la carcasa del Spectrum, impresas en 3D. Fuente piezas: https://github. com/davidprograma/ytc/tree/master/16-ZxSPiCTRUM/SPiCTRUM-RPi-backplanes Esquema de conexionado. Fuente imagen: https://github. com/davidprograma&lt;/p&gt; Siguiendo el esquema de conexionado GPIO, que facilita David en su github, procedí a conectar 5 pines GPIO al conector de 5 pines y 8 pines GPIO al conector de 8 pines con los diodos 1N4148, montando dos placas pequeñas y cableando. &lt;/p&gt; Posicionando todo en el interior de la carcasa.  Conectadas las fajas de la membrana a sus correspondientes conectores. También le he conectado en el puerto USB una Magic-Ns ya que esta está soportada en ZXBareMulator, con lo que puedo hacer uso de una mando de PS4 :) Y finalmente cerramos la carcasa y ponemos todos los tornillos.  La versión que uso de ZXBaremulator es la 3. 2. Características destacadas:  Permite conectar un teclado real de Spectrum 48k, Spectrum+ o Spectrum 128K (pero no los +2a/+3) a la Raspberry PI vía GPIO.  Tiene soporte para el adaptador USB MAGIC-NS de Mayflash. Con él se pueden conectar un montón de mandos, tanto por cable como por Bluetooth. El adaptador debe estar en modo DirectInput (LED de color azul).  Se ha acelerado un poco el método de carga de las cintas virtuales. Me encanta como ha quedado!! todo funciona perfectamente. Fuentes:ZXBareMulatorYouTube David programa "
    }, {
    "id": 12,
    "url": "/formatear-una-compact-flash-en-fat16-en-ubuntu/",
    "title": "Formatear una Compact Flash en FAT16 en Ubuntu",
    "body": "2021/02/05 - He tenido la necesidad de formatear una Compact Flash en formato FAT16 y en esta líneas voy a plasmar los pasos que he seguido para hacerlo desde el sistema operativo Ubuntu. Desde la Terminal y como root, instalar las utilidades para formatear. apt-get install dosfstoolsDespués de conectar la CF en su lector y este al ordenador, averiguo la ubicación del dispositivo con el siguiente comando: dfObtendré una salida similar a esta: tmpfs/dev/sda1 Ahora procedemos a desmontar el volumen. umount /dev/sda1 Y finalmente formateamos el dispositivo con el siguiente comando: mkdosfs -v /dev/sda1 Y objetivo conseguido. "
    }, {
    "id": 13,
    "url": "/instalacion-de-octoprint-tft/",
    "title": "Instalación de Octoprint-TFT",
    "body": "2019/02/09 - Octoprint-TFT es una interfaz táctil OctoPrint para módulos táctiles TFT basados en GTK + 3 que nos sirve para controlar nuestra impresora 3D. una pantalla tft de 3. 5”. Partiendo del punto en el que ya tenemos instalado octoprint, con el SSH activado. 1) Instalación de drivers de la pantalla desde SSH: Para que la pantalla funcione en la Rpi con nuestro octoprint, debemos conectarnos vía ssh a través del terminal de nuestro ordenador e introducir los siguientes comandos. wget https://www. waveshare. com/w/upload/1/1e/LCD-show-180817. tar. gztar xvf LCD-show-180817. tar. gzcd LCD-show/chmod +x LCD35-show. /LCD35-showLa Rpi se reiniciara y nos aparecerá la consola por la pantalla. 2) Instalacion de Octoprint-TFT sudo apt-get updatesudo apt-get install xserver-xorg xinit libgtk-3-0 xserver-xorg-video-fbdevwget https://github. com/mcuadros/OctoPrint-TFT/releases/download/v0. 1. 2/octoprint-tft_0. 1. 2-1. stretch_armhf. debsudo dpkg -i octoprint-tft_0. 1. 2-1. stretch_armhf. debsudo mv /usr/share/X11/xorg. conf. d/99-fbturbo. conf ~sudo nano /lib/systemd/system/octoprint-tft. serviceCambiamos el valor 0 a 1 en esta linea: ExecStart=/usr/bin/xinit /usr/bin/OctoPrint-TFT -- :0 -nolisten tcp -nocursora ExecStart=/usr/bin/xinit /usr/bin/OctoPrint-TFT -- :1 -nolisten tcp -nocursorGrabamos el archivo, pulsando CTRL+X y confirmamos tecleando Y, para guardarlo. Ya tendremos lista nuestra pantalla TFT con control táctil. Fuente: https://github. com/mcuadros/OctoPrint-TFT "
    }, {
    "id": 14,
    "url": "/instalar-octoprint-en-una-raspberry-pi-desde-macos/",
    "title": "Instalar OctoPrint en una Raspberry Pi desde MacOs",
    "body": "2018/04/11 - Instalar el servidor de impresión 3D OctoPrint en una Raspberry Pi desde el entorno MacOs es muy fácil. Primero de todo, descargaremos la última versión de Octoprint desde la web oficial. El fichero descargado viene comprimido en un zip. No es necesario descomprimirlo. Para quemar la imagen usaremos el programa Etcher.  Solo tenemos que seleccionar el archivo zip descargado, escoger la tarjeta SD que vamos a usar y a grabar. Una vez terminado debamos acceder a la tarjeta SD desde el terminal y editar con nano el archivo octopi-network. txt , donde configuraremos el bloque de configuración de seguridad inalámbrica con los datos de nuestra conexión. ## WPA/WPA2 secured#iface wlan0-octopi inet manual#  wpa-ssid “put SSID here”#  wpa-psk “put password here”Para ello descomentamos las siguientes líneas y editamos con los datos de nuestra conexión Wifi ## WPA/WPA2 securediface wlan0-octopi inet manual  wpa-ssid “put SSID here”  wpa-psk “put password here”Grabamos y salimos. Ahora ya podemos colocar la tarjeta sd en nuestra Raspberry Pi y empezar a usar el servidor de impresión, accediendo a la dirección http://octopi. local.  "
    }, {
    "id": 15,
    "url": "/como-eliminar-la-cache-de-twitter/",
    "title": "Cómo eliminar la cache de Twitter",
    "body": "2017/10/26 - Si alguna vez has compartido una url en twitter y te has dado cuenta a posteriori de la existencia de algún error en el mismo, bien en el titulo o en el contenido, te darás cuenta que aunque lo corrijas, al estar cacheado en Twitter, se seguirá compartiendo con el mismo error. Por lo que para darle solución a ese situación lo que tenemos que hacer es entrar en el validador de Twitter Cards –&gt; https://cards-dev. twitter. com/validator y meter la URL que nos interesa y darle a actualizar, con esto quedará descacheada y ya podremos compartirla sin ningún error. "
    }, {
    "id": 16,
    "url": "/probando-acdisplay/",
    "title": "Probando AcDisplay",
    "body": "2015/01/23 - He probado la app AcDisplay en mi Xiaomi MI 3 y me ha encantado su diseño que es agradable y minimalista. Esta app nos permite gestionar de un modo diferente las notificaciones en nuestro movil Android. Las notificaciones que recibimos nos aparecen en la pantalla de bloqueo. Entre sus características están las de establecer horas de inactividad (ahorra batería), lista negra, etc.  AcDisplay en Google Play"
    }, {
    "id": 17,
    "url": "/actualizando-ghost/",
    "title": "Actualizando Ghost",
    "body": "2014/12/22 - Ha salido una nueva versión de Ghost y queremos actualizar. ¿Qué tenemos que hacer? Pues muy fácil, primero descargaremos la última versión de Ghost y la descomprimiremos. Después subimos el contenido al servidor donde tenemos alojado nuestro blog y sustituiremos los archivos. Lo único que no vamos a subir es la carpeta content, que es la que posee el contenido de nuestro blog y el theme que usamos. Después procedemos a instalarlo vía terminal, npm install --productiony a arrancarlo. npm startY ya tenemos el blog operativo y actualizado a la última versión. "
    }, {
    "id": 18,
    "url": "/instalando-ghost-en-local-en-un-mac/",
    "title": "Instalando Ghost en local y en un Mac",
    "body": "2014/12/14 - Lo primero que haremos es dirigirnos a la web oficial ghost. org y descargar la versión más reciente. El archivo en cuestión se trata de un archivo comprimido que una vez descargado, descomprimiremos y lo pondremos, por ejemplo en la raíz del disco duro. A través del terminal no dirigimos a esa ubicación. cd ghostProcederemos a instalarlo. npm install --productionDespués lo arrancaremos, ya en local. npm startNos indicará que ya está operativo en la dirección 127. 0. 0. 1:2368Lo primero que haremos será crear una cuenta de administrador (127. 0. 0. 1:2368/admin) y ya podemos empezar a bloguear en local … "
    }, {
    "id": 19,
    "url": "/un-nuevo-componente-en-mi-familia/",
    "title": "Un nuevo componente en mi familia",
    "body": "2014/11/12 - Hoy llegó un nuevo componente para mi familia. Se trata de Koke un cocker spaniel de dos meses de edad y de color canela. Un cachorro super guapo y cariñoso que ya se ha ganado el cariño de tod@s nosotros.     Ver esta publicación en Instagram      Una publicación compartida de José (@jose. ga) "
    }, {
    "id": 20,
    "url": "/disfrutando-de-un-iphone-6/",
    "title": "Disfrutando de un iPhone 6",
    "body": "2014/10/26 - Es lo que tiene cumplir años, que de vez en cuando cae como regalo algo super especial. Y este ha sido ese año. Mi mujer me ha regalado un iPhone 6 de 4,7 pulgadas y 64 Gb de capacidad. Tengo que decir que es una pasada de móvil. Realmente es muy delgado (0,69 cm) y lo de desbloquear el móvil con la huella dactilar funciona a la perfección. Ahora a disfrutarlo! Os dejo unas instantáneas del mismo.  "
    }, {
    "id": 21,
    "url": "/probando-jekyll/",
    "title": "Probando Jekyll",
    "body": "2014/10/19 - Primero de todo, decir que Jekyll es un parser programado en Ruby que se utiliza para bloguear en estático. Lo primero que hay que hacer es instalarlo en el ordenador $ gem install jekyllDespués crearemos una carpeta donde vamos alojar localmente el blog. $ jekyll new my-awesome-site$ cd my-awesome-siteY después arrancamos el serve /my-awesome-site $ jekyll serveSi todo va bien, Jekyll generará todo y te dará una URL donde ver el sitio generado, en mi caso es http://0. 0. 0. 0:4000, que a posteriori podemos hospedar en Github Pages. "
    }, {
    "id": 22,
    "url": "/instalando-miui6-en-mi-xiaomi-mi3w/",
    "title": "Instalando MIUI6 en mi Xiaomi MI3W",
    "body": "2014/09/14 - Miui es un firmware para smartphones basado en el sistema operativo de código abierto Android desarrollado por Xiaomi Tech y viendo que había salido la version oficial de MIUI6 y que ya se encontraba disponible la Rom traducida al español por parte de los chicos de miui. es, me decidí a actualizar mi Xiaomi MI3W de MIUI v5 a MIUI6 ProcesoAntes de nada lo que hice fue actualizar mi CWM Recovery a la versión 6. 0. 5. 0. Para ello, después de descargar el archivo, lo coloque en la raíz de la memoria del teléfono, reinicié en el recovery e instalé como si de una ROM se tratase. Las características de este recovery son las siguientes: Activación y desactivación de True Dual BootAroma File ManagerManejo con la pantalla táctilLimpieza de la partición /data (wipe data)Limpieza de la caché (wipe cache)Creación y restauración de copias de seguridad NAND (sistema y datos)Apagado del dispositivoADB en modo recoveryActualizado el CWM recovery procedí a descargar la Rom (4. 9. 9) traducida por miui. es y a copiarla a la memoria interna (Internal Storage) del Mi3W. Apagué el móvil y lo inicié en modo Recovery (Pulsando Botón Encendido + Volumen Arriba). Seleccioné el system donde instalar la rom (system1) Hice los wipes “wipe data/factory reset” “wipe cache partition” y “wipe dalvik cache” para hacer una instalación limpia. Después seleccioné las opciones: “Install zip from sdcard” –&gt; “chosse zip from sdcard” –&gt; “0/” Navegué por los archivos hasta encontrar y seleccionar el archivo . zip de la Rom. Confirmé la instalación y esta se realizó. Para finalizar reinicié pulsando “reboot system now”, dando por finalizado la instalación. Pantallazos  "
    }, {
    "id": 23,
    "url": "/objeto-de-deseo/",
    "title": "Objeto de deseo",
    "body": "2014/09/01 - En la búsqueda de un regalo de cumpleaños para mi hermano y casi sin querer, me encontré a la venta en una tienda un juego antiguo para la videoconsola SEGA Mega Drive, que me provocó sentimientos de nostalgia. Es lo que tiene la retroinformática. El juego en cuestión es el NBA Live 95 y como sabía que siempre fue objeto de su deseo no pude dejar pasar la ocasión.  He de decir que acerté plenamente ya que la cara de satisfacción de mi hermano así lo denotaba. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});