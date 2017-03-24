function carga() {
    document.getElementById("aprender").onclick = aprender;
    document.getElementById("repasar").onclick = repasar;
}
function aprender() {
    document.getElementById("inicio").style.display = "none";
    crearSECTIONA();
    crearDIVA();
}
function crearSECTIONA() {
    var padre = document.getElementById("inicioArticle");
    var secti = document.createElement("section");
    secti.setAttribute("id", "aprendertablas");
    var h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("ELIGE UN NÚMERO"));
    secti.appendChild(h2);
    var h3 = document.createElement("h3");
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "cero");
    boton0.appendChild(document.createTextNode("0"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "uno");
    boton0.appendChild(document.createTextNode("1"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "dos");
    boton0.appendChild(document.createTextNode("2"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "tres");
    boton0.appendChild(document.createTextNode("3"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "cuatro");
    boton0.appendChild(document.createTextNode("4"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "cinco");
    boton0.appendChild(document.createTextNode("5"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "seis");
    boton0.appendChild(document.createTextNode("6"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "siete");
    boton0.appendChild(document.createTextNode("7"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "ocho");
    boton0.appendChild(document.createTextNode("8"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "nueve");
    boton0.appendChild(document.createTextNode("9"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "diez");
    boton0.appendChild(document.createTextNode("10"));
    h3.appendChild(boton0);
    secti.appendChild(h3);
    padre.appendChild(secti);
    document.getElementById("aprendertablas").style.display = "inline";

    document.getElementById("uno").onclick = uno;
    document.getElementById("cero").onclick = cero;
    document.getElementById("dos").onclick = dos;
    document.getElementById("tres").onclick = tres;
    document.getElementById("cuatro").onclick = cuatro;
    document.getElementById("cinco").onclick = cinco;
    document.getElementById("seis").onclick = seis;
    document.getElementById("siete").onclick = siete;
    document.getElementById("ocho").onclick = ocho;
    document.getElementById("nueve").onclick = nueve;
    document.getElementById("diez").onclick = diez;
}
function crearDIVA() {
    var padre = document.getElementById("aprendertablas");
    var uno = document.createElement("div");
    var dos = document.createElement("button");
    var tres = document.createElement("button");

    dos.appendChild(document.createTextNode("MENÚ"));
    tres.appendChild(document.createTextNode("BORRAR"));
    padre.appendChild(uno);
    padre.appendChild(dos);
    padre.appendChild(tres);
    uno.setAttribute("id", "salidaAprende");
    dos.setAttribute("id", "vuelta");
    dos.setAttribute("class", "vuelta");
    tres.setAttribute("id", "borrar");
    tres.setAttribute("class", "borrar");
    document.getElementById("vuelta").onclick = vuelta;
    document.getElementById("borrar").onclick = borrar;
}
function repasar() {
    document.getElementById("inicio").style.display = "none";
    crearSECTIONR();
    crearDIVR();
}
function crearDIVR() {
    var padre = document.getElementById("repasartablas");
    var uno = document.createElement("div");
    var dos = document.createElement("button");
    var tres = document.createElement("button");
    var cuatro = document.createElement("label");
    var cuatroInput = document.createElement("input");
    var cinco = document.createElement("label");
    var cincoInput = document.createElement("input");
    dos.appendChild(document.createTextNode("MENÚ"));
    tres.appendChild(document.createTextNode("BORRAR"));
    cuatro.appendChild(document.createTextNode("ACIERTOS:"));
    cinco.appendChild(document.createTextNode("FALLOS:"));
    padre.appendChild(uno);
    padre.appendChild(dos);
    padre.appendChild(tres);
    padre.appendChild(cuatro);
    padre.appendChild(cuatroInput);
    padre.appendChild(cinco);
    padre.appendChild(cincoInput);
    uno.setAttribute("id", "repasaAprende");
    dos.setAttribute("id", "vueltar");
    dos.setAttribute("class", "vuelta");
    tres.setAttribute("id", "borrarr");
    tres.setAttribute("class", "borrar");
    cuatro.setAttribute("id", "aciertosS");
    cuatroInput.setAttribute("readonly", "true");
    cuatroInput.setAttribute("id", "aciertosInput");
    cuatroInput.setAttribute("value", "0");
    cinco.setAttribute("id", "fallosS");
    cincoInput.setAttribute("id", "fallosInput");
    cincoInput.setAttribute("value", "0");
    cincoInput.setAttribute("readonly", "true");
    document.getElementById("vueltar").onclick = vuelta;
    document.getElementById("borrarr").onclick = borrar;
}
function crearSECTIONR() {
    var padre = document.getElementById("inicioArticle");
    var secti = document.createElement("section");
    secti.setAttribute("id", "repasartablas");
    var h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("ELIGE UN NÚMERO"));
    secti.appendChild(h2);
    var h3 = document.createElement("h3");
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "ceror");
    boton0.appendChild(document.createTextNode("0"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "unor");
    boton0.appendChild(document.createTextNode("1"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "dosr");
    boton0.appendChild(document.createTextNode("2"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "tresr");
    boton0.appendChild(document.createTextNode("3"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "cuatror");
    boton0.appendChild(document.createTextNode("4"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "cincor");
    boton0.appendChild(document.createTextNode("5"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "seisr");
    boton0.appendChild(document.createTextNode("6"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "sieter");
    boton0.appendChild(document.createTextNode("7"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "ochor");
    boton0.appendChild(document.createTextNode("8"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "nuever");
    boton0.appendChild(document.createTextNode("9"));
    h3.appendChild(boton0);
    var boton0 = document.createElement("button");
    boton0.setAttribute("id", "diezr");
    boton0.appendChild(document.createTextNode("10"));
    h3.appendChild(boton0);
    secti.appendChild(h3);
    padre.appendChild(secti);
    document.getElementById("repasartablas").style.display = "inline";

    document.getElementById("ceror").onclick = ceror;
    document.getElementById("unor").onclick = unor;
    document.getElementById("dosr").onclick = dosr;
    document.getElementById("tresr").onclick = tresr;
    document.getElementById("cuatror").onclick = cuatror;
    document.getElementById("cincor").onclick = cincor;
    document.getElementById("seisr").onclick = seisr;
    document.getElementById("sieter").onclick = sieter;
    document.getElementById("ochor").onclick = ochor;
    document.getElementById("nuever").onclick = nuever;
    document.getElementById("diezr").onclick = diezr;
}
function cero() {
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("salidaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("salidaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(0 + " x " + i + " = " + i * 0);
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function uno() {
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("salidaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("salidaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(1 + " x " + i + " = " + i * 1);
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function dos() {
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("salidaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("salidaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(2 + " x " + i + " = " + i * 2);
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function tres() {
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("salidaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("salidaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(3 + " x " + i + " = " + i * 3);
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function cuatro() {
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("salidaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("salidaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(4 + " x " + i + " = " + i * 4);
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function cinco() {
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("salidaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("salidaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(5 + " x " + i + " = " + i * 5);
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function seis() {
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("salidaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("salidaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(6 + " x " + i + " = " + i * 6);
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function siete() {
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("salidaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("salidaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(7 + " x " + i + " = " + i * 7);
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function ocho() {
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("salidaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("salidaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(8 + " x " + i + " = " + i * 8);
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function nueve() {
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("salidaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("salidaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(9 + " x " + i + " = " + i * 9);
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function diez() {
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("salidaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("salidaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(10 + " x " + i + " = " + i * 10);
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function vuelta() {
    if (document.getElementById("fallosInput")) {
        document.getElementById("fallosInput").value = 0;
    }
    if (document.getElementById("aciertosInput")) {
        document.getElementById("aciertosInput").value = 0;
    }
    document.getElementById("inicio").style.display = "inline";
    if (document.getElementById("repasartablas")) {
        var padre1 = document.getElementById("inicioArticle");
        var v = document.getElementById("repasartablas");
        padre1.removeChild(v);
    }
    if (document.getElementById("aprendertablas")) {
        var padre1 = document.getElementById("inicioArticle");
        var v = document.getElementById("aprendertablas");
        padre1.removeChild(v);
    }
}
function borrar() {
    if (document.getElementById("fallosInput")) {
        document.getElementById("fallosInput").value = 0;
    }
    if (document.getElementById("aciertosInput")) {
        document.getElementById("aciertosInput").value = 0;
    }
    if (document.getElementById("salidaAprende")) {
        var padre1 = document.getElementById("salidaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    if (document.getElementById("repasaAprende")) {
        var padre1 = document.getElementById("repasaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
}
function ceror() {
    if (document.getElementById("fallosInput")) {
        document.getElementById("fallosInput").value = 0;
    }
    if (document.getElementById("aciertosInput")) {
        document.getElementById("aciertosInput").value = 0;
    }
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("repasaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("repasaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(0 + " x " + i + " = ");
        var inp = document.createElement("input");
        var label = document.createElement("label");
        label.setAttribute("id", "label" + 0 + i);
        label.setAttribute("style", "display: none;");
        label.appendChild(document.createTextNode(" " + 0 * i));
        inp.setAttribute("id", "ip" + 0 + i);
        inp.setAttribute("type", "text");
        inp.setAttribute("onchange", "comprobar(0," + i + ")");
        inp.setAttribute("maxLength", "2");
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
        uno.appendChild(inp);
        uno.appendChild(label);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function unor() {
    if (document.getElementById("fallosInput")) {
        document.getElementById("fallosInput").value = 0;
    }
    if (document.getElementById("aciertosInput")) {
        document.getElementById("aciertosInput").value = 0;
    }
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("repasaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("repasaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(1 + " x " + i + " = ");
        var inp = document.createElement("input");
        var label = document.createElement("label");
        label.setAttribute("id", "label" + 1 + i);
        label.setAttribute("style", "display: none;");
        label.appendChild(document.createTextNode(" " + 1 * i));
        inp.setAttribute("id", "ip" + 1 + i);
        inp.setAttribute("type", "text");
        inp.setAttribute("onchange", "comprobar(1," + i + ")");
        inp.setAttribute("maxLength", "2");
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
        uno.appendChild(inp);
        uno.appendChild(label);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function dosr() {
    if (document.getElementById("fallosInput")) {
        document.getElementById("fallosInput").value = 0;
    }
    if (document.getElementById("aciertosInput")) {
        document.getElementById("aciertosInput").value = 0;
    }
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("repasaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("repasaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(2 + " x " + i + " = ");
        var inp = document.createElement("input");
        var label = document.createElement("label");
        label.setAttribute("id", "label" + 2 + i);
        label.setAttribute("style", "display: none;");
        label.appendChild(document.createTextNode(" " + 2 * i));
        inp.setAttribute("id", "ip" + 2 + i);
        inp.setAttribute("type", "text");
        inp.setAttribute("onchange", "comprobar(2," + i + ")");
        inp.setAttribute("maxLength", "2");
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
        uno.appendChild(inp);
        uno.appendChild(label);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function tresr() {
    if (document.getElementById("fallosInput")) {
        document.getElementById("fallosInput").value = 0;
    }
    if (document.getElementById("aciertosInput")) {
        document.getElementById("aciertosInput").value = 0;
    }
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("repasaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("repasaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(3 + " x " + i + " = ");
        var inp = document.createElement("input");
        var label = document.createElement("label");
        label.setAttribute("id", "label" + 3 + i);
        label.setAttribute("style", "display: none;");
        label.appendChild(document.createTextNode(" " + 3 * i));
        inp.setAttribute("id", "ip" + 3 + i);
        inp.setAttribute("type", "text");
        inp.setAttribute("onchange", "comprobar(3," + i + ")");
        inp.setAttribute("maxLength", "2");
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
        uno.appendChild(inp);
        uno.appendChild(label);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function cuatror() {
    if (document.getElementById("fallosInput")) {
        document.getElementById("fallosInput").value = 0;
    }
    if (document.getElementById("aciertosInput")) {
        document.getElementById("aciertosInput").value = 0;
    }
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("repasaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("repasaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(4 + " x " + i + " = ");
        var inp = document.createElement("input");
        var label = document.createElement("label");
        label.setAttribute("id", "label" + 4 + i);
        label.setAttribute("style", "display: none;");
        label.appendChild(document.createTextNode(" " + 4 * i));
        inp.setAttribute("id", "ip" + 4 + i);
        inp.setAttribute("type", "text");
        inp.setAttribute("onchange", "comprobar(4," + i + ")");
        inp.setAttribute("maxLength", "2");
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
        uno.appendChild(inp);
        uno.appendChild(label);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function cincor() {
    if (document.getElementById("fallosInput")) {
        document.getElementById("fallosInput").value = 0;
    }
    if (document.getElementById("aciertosInput")) {
        document.getElementById("aciertosInput").value = 0;
    }
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("repasaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("repasaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(5 + " x " + i + " = ");
        var inp = document.createElement("input");
        var label = document.createElement("label");
        label.setAttribute("id", "label" + 5 + i);
        label.setAttribute("style", "display: none;");
        label.appendChild(document.createTextNode(" " + 5 * i));
        inp.setAttribute("id", "ip" + 5 + i);
        inp.setAttribute("type", "text");
        inp.setAttribute("onchange", "comprobar(5," + i + ")");
        inp.setAttribute("maxLength", "2");
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
        uno.appendChild(inp);
        uno.appendChild(label);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function seisr() {
    if (document.getElementById("fallosInput")) {
        document.getElementById("fallosInput").value = 0;
    }
    if (document.getElementById("aciertosInput")) {
        document.getElementById("aciertosInput").value = 0;
    }
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("repasaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("repasaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(6 + " x " + i + " = ");
        var inp = document.createElement("input");
        var label = document.createElement("label");
        label.setAttribute("id", "label" + 6 + i);
        label.setAttribute("style", "display: none;");
        label.appendChild(document.createTextNode(" " + 6 * i));
        inp.setAttribute("id", "ip" + 6 + i);
        inp.setAttribute("type", "text");
        inp.setAttribute("onchange", "comprobar(6," + i + ")");
        inp.setAttribute("maxLength", "2");
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
        uno.appendChild(inp);
        uno.appendChild(label);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function sieter() {
    if (document.getElementById("fallosInput")) {
        document.getElementById("fallosInput").value = 0;
    }
    if (document.getElementById("aciertosInput")) {
        document.getElementById("aciertosInput").value = 0;
    }
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("repasaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("repasaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(7 + " x " + i + " = ");
        var inp = document.createElement("input");
        var label = document.createElement("label");
        label.setAttribute("id", "label" + 7 + i);
        label.setAttribute("style", "display: none;");
        label.appendChild(document.createTextNode(" " + 7 * i));
        inp.setAttribute("id", "ip" + 7 + i);
        inp.setAttribute("type", "text");
        inp.setAttribute("onchange", "comprobar(7," + i + ")");
        inp.setAttribute("maxLength", "2");
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
        uno.appendChild(inp);
        uno.appendChild(label);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function ochor() {
    if (document.getElementById("fallosInput")) {
        document.getElementById("fallosInput").value = 0;
    }
    if (document.getElementById("aciertosInput")) {
        document.getElementById("aciertosInput").value = 0;
    }
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("repasaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("repasaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(8 + " x " + i + " = ");
        var inp = document.createElement("input");
        var label = document.createElement("label");
        label.setAttribute("id", "label" + 8 + i);
        label.setAttribute("style", "display: none;");
        label.appendChild(document.createTextNode(" " + 8 * i));
        inp.setAttribute("id", "ip" + 8 + i);
        inp.setAttribute("type", "text");
        inp.setAttribute("onchange", "comprobar(8," + i + ")");
        inp.setAttribute("maxLength", "2");
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
        uno.appendChild(inp);
        uno.appendChild(label);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function nuever() {
    if (document.getElementById("fallosInput")) {
        document.getElementById("fallosInput").value = 0;
    }
    if (document.getElementById("aciertosInput")) {
        document.getElementById("aciertosInput").value = 0;
    }
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("repasaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("repasaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(9 + " x " + i + " = ");
        var inp = document.createElement("input");
        var label = document.createElement("label");
        label.setAttribute("id", "label" + 9 + i);
        label.setAttribute("style", "display: none;");
        label.appendChild(document.createTextNode(" " + 9 * i));
        inp.setAttribute("id", "ip" + 9 + i);
        inp.setAttribute("type", "text");
        inp.setAttribute("onchange", "comprobar(9," + i + ")");
        inp.setAttribute("maxLength", "2");
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
        uno.appendChild(inp);
        uno.appendChild(label);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function diezr() {
    if (document.getElementById("fallosInput")) {
        document.getElementById("fallosInput").value = 0;
    }
    if (document.getElementById("aciertosInput")) {
        document.getElementById("aciertosInput").value = 0;
    }
    if (document.getElementById("ceroDOM")) {
        var padre1 = document.getElementById("repasaAprende");
        var uno1 = document.getElementById("ceroDOM");
        padre1.removeChild(uno1);
    }
    var uno = document.createElement("p");
    var cuentos;
    var padre = document.getElementById("repasaAprende");
    for (var i = 0; i < 11; i++) {
        cuentos = document.createTextNode(10 + " x " + i + " = ");
        var inp = document.createElement("input");
        var label = document.createElement("label");
        label.setAttribute("id", "label" + 10 + i);
        label.setAttribute("style", "display: none;");
        label.appendChild(document.createTextNode(" " + 10 * i));
        inp.setAttribute("id", "ip" + 10 + i);
        inp.setAttribute("type", "text");
        inp.setAttribute("onchange", "comprobar(10," + i + ")");
        inp.setAttribute("maxLength", "2");
        uno.appendChild(document.createElement("br"));
        uno.appendChild(cuentos);
        uno.appendChild(inp);
        uno.appendChild(label);
    }
    padre.appendChild(uno);
    uno.setAttribute("id", "ceroDOM");
}
function comprobar(j, i) {
    var input = document.getElementById("ip" + j + i).value;
    if (input != " " && input == j * i) {
        document.getElementById("ip" + j + i).readOnly = true;
        document.getElementById("ip" + j + i).style.color = "green";
        document.getElementById("label" + j + i).style.display = "none";
        var nuevo = parseInt(document.getElementById("aciertosInput").value);
        document.getElementById("aciertosInput").value = nuevo + 1;
        alert("ACIERTO");
    } else {
        document.getElementById("ip" + j + i).readOnly = true;
        document.getElementById("ip" + j + i).style.color = "red";
        document.getElementById("label" + j + i).style.display = "inline";
        var nuevo = parseInt(document.getElementById("fallosInput").value);
        document.getElementById("fallosInput").value = nuevo + 1;
        alert("FALLO");
    }
}