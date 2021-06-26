//galeria inicio
var galeria = new Array();
galeria[0]= "img/img1.jpg";
galeria[1]= "img/img2.jpg";
galeria[2]= "img/img3.jpg";
galeria[3]= "img/img4.jpg";
galeria[4]= "img/img5.jpg";
galeria[5]= "img/img6.jpg";
var i=1;
function funcion_galeria() {
    document.imgSrc.src = galeria[i];
    i++
    if (i>5) {
        i=0;
    }
}
function carrusel() {
    document.imgSrc.src = galeria[0];

    setInterval(funcion_galeria,2000);
}
//galerias planetas
var mercurio = new Array();
mercurio[0] = "img/mercurio/mercurio1.jpg";
mercurio[1] = "img/mercurio/mercurio2.jpg";
mercurio[2] = "img/mercurio/mercurio3.jpg";
mercurio[3] = "img/mercurio/mercurio4.jpg";

var venus = new Array();
venus[0] = "img/venus/venus1.jpg";
venus[1] = "img/venus/venus2.jpg";
venus[2] = "img/venus/venus3.jpg";
venus[3] = "img/venus/venus4.jpg";

var tierra = new Array();
tierra[0] = "img/tierra/tierra1.jpg";
tierra[1] = "img/tierra/tierra2.jpg";
tierra[2] = "img/tierra/tierra3.jpg";
tierra[3] = "img/tierra/tierra4.jpg";

var marte = new Array();
marte[0] = "img/marte/marte1.jpg";
marte[1] = "img/marte/marte2.jpg";
marte[2] = "img/marte/marte3.jpg";
marte[3] = "img/marte/marte4.jpg";

var jupiter = new Array();
jupiter[0] = "img/jupiter/jupiter1.jpg";
jupiter[1] = "img/jupiter/jupiter2.jpg";
jupiter[2] = "img/jupiter/jupiter3.jpg";
jupiter[3] = "img/jupiter/jupiter4.jpg";

var urano = new Array();
urano[0] = "img/urano/urano1.jpg";
urano[1] = "img/urano/urano2.jpg";
urano[2] = "img/urano/urano3.jpg";
urano[3] = "img/urano/urano4.jpg";

var saturno = new Array();
saturno[0] = "img/saturno/saturno1.jpg";
saturno[1] = "img/saturno/saturno2.jpg";
saturno[2] = "img/saturno/saturno3.jpg";
saturno[3] = "img/saturno/saturno4.jpg";

var neptuno = new Array();
neptuno[0] = "img/neptuno/neptuno1.jpg";
neptuno[1] = "img/neptuno/neptuno2.jpg";
neptuno[2] = "img/neptuno/neptuno3.jpg";
neptuno[3] = "img/neptuno/neptuno4.jpg";
//funcion mercurio
var j=1;
function funcion_galeria_mercurio() {
    document.imgMercurio.src = mercurio[j];
    j++
    if (j>3) {
        j=0;
    }
}
function carrusel_mercurio() {
    document.imgMercurio.src = mercurio[0];

    setInterval(funcion_galeria_mercurio, 2000);
}
//funcion venus
var b=1;
function funcion_galeria_venus() {
    document.venus.src = venus[b];
    b++
    if (b>3) {
        b=0;
    }
}
function carrusel_venus() {
    document.venus.src = venus[0];

    setInterval(funcion_galeria_venus,2000);
}
//funcion tierra
var c=1;
function funcion_galeria_tierra() {
    document.tierra.src = tierra[c];
    c++
    if (c>3) {
        c=0;
    }
}
function carrusel_tierra() {
    document.tierra.src = tierra[0];

    setInterval(funcion_galeria_tierra,2000);
}
//funcion marte
var ma=1;
function funcion_galeria_marte() {
    document.marte.src = marte[ma];
    ma++
    if (ma>3) {
        ma=0;
    }
}
function carrusel_marte() {
    document.marte.src = marte[0];

    setInterval(funcion_galeria_marte,2000);
}
//funcion jupiter
var h=1;
function funcion_galeria_jupiter() {
    document.jupiter.src = jupiter[h];
    h++
    if (h>3) {
        h=0;
    }
}
function carrusel_jupiter() {
    document.jupiter.src = jupiter[0];

    setInterval(funcion_galeria_jupiter,2000);
}
//funcion saturno
var s=1;
function funcion_galeria_saturno() {
    document.saturno.src = saturno[s];
    s++
    if (s>3) {
        s=0;
    }
}
function carrusel_saturno() {
    document.saturno.src = saturno[0];

    setInterval(funcion_galeria_saturno,2000);
}
//funcion urano
var u=1;
function funcion_galeria_urano() {
    document.urano.src = urano[u];
    u++
    if (u>3) {
        u=0;
    }
}
function carrusel_urano() {
    document.urano.src = urano[2];

    setInterval(funcion_galeria_urano,2000);
}
//funcion neptuno
var n=1;
function funcion_galeria_neptuno() {
    document.neptuno.src = neptuno[n];
    n++
    if (n>3) {
        n=0;
    }
}
function carrusel_neptuno() {
    document.neptuno.src = neptuno[0];

    setInterval(funcion_galeria_neptuno,2000);
}
//galerias planetas enanos
var ceres = new Array();
ceres[0] = "img/ceres/ceres1.jpg";
ceres[1] = "img/ceres/ceres2.jpg";
ceres[2] = "img/ceres/ceres3.jpg";
ceres[3] = "img/ceres/ceres4.jpg";

var pluton = new Array();
pluton[0] = "img/pluton/pluton1.jpg";
pluton[1] = "img/pluton/pluton2.jpg";
pluton[2] = "img/pluton/pluton3.jpg";
pluton[3] = "img/pluton/pluton4.jpg";

var haumea = new Array();
haumea[0] = "img/haumea/haumea1.jpg";
haumea[1] = "img/haumea/haumea2.jpg";
haumea[2] = "img/haumea/haumea3.jpg";
haumea[3] = "img/haumea/haumea4.jpg";

var makemake = new Array();
makemake[0] = "img/makemake/makemake1.jpg";
makemake[1] = "img/makemake/makemake2.jpg";
makemake[2] = "img/makemake/makemake3.png";
makemake[3] = "img/makemake/makemake4.jpg";

var erid = new Array();
erid[0] = "img/erid/erid1.jpg";
erid[1] = "img/erid/erid2.jpg";
erid[2] = "img/erid/erid3.jpg";
erid[3] = "img/erid/erid4.jpg";

//funcion ceres
var ce=1;
function funcion_galeria_ceres() {
    document.ceres.src = ceres[ce];
    ce++
    if (ce>3) {
        ce=0;
    }
}
function carrusel_ceres() {
    document.ceres.src = ceres[0];

    setInterval(funcion_galeria_ceres, 2000);
}
//funcion pluton
var p=1;
function funcion_galeria_pluton() {
    document.pluton.src = pluton[p];
    p++
    if (p>3) {
        p=0;
    }
}
function carrusel_pluton() {
    document.pluton.src = pluton[0];

    setInterval(funcion_galeria_pluton, 2000);
}
//funcion haumea
var ha=1;
function funcion_galeria_haumea() {
    document.haumea.src = haumea[ha];
    ha++
    if (ha>3) {
        ha=0;
    }
}
function carrusel_haumea() {
    document.haumea.src = haumea[0];

    setInterval(funcion_galeria_haumea, 2000);
}
//funcion makemake
var k=1;
function funcion_galeria_makemake() {
    document.makemake.src = makemake[k];
    k++
    if (k>3) {
        k=0;
    }
}
function carrusel_makemake() {
    document.makemake.src = makemake[0];

    setInterval(funcion_galeria_makemake, 2000);
}
//funcion erid
var er=1;
function funcion_galeria_erid() {
    document.erid.src = ceres[er];
    er++
    if (er>3) {
        er=0;
    }
}
function carrusel_erid() {
    document.erid.src = erid[0];

    setInterval(funcion_galeria_erid, 2000);
}
