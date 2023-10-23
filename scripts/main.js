import { series } from './data.js';
var contenidoTabla = document.getElementById('contenido');
var imagenTarjeta = document.getElementById('imagen');
var tituloTarjeta = document.getElementById('titulo');
var descripcionTarjeta = document.getElementById('descripcion');
var linkTarjeta = document.getElementById('link');
mostrarTabla(series);
ImprimirPromedio();
actualizarTarjeta();
function mostrarTabla(series) {
    var Tbody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        console.log(serie);
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>".concat(serie.id, "</td>\n        <td>").concat(serie.nombre, "</td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>\n        ");
        Tbody.appendChild(row);
    }
    contenidoTabla.appendChild(Tbody);
}
function calcularPromedioTemporadas() {
    var suma = 0;
    var n = series.length;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        suma += serie.temporadas;
    }
    var promedio = suma / n;
    return promedio;
}
function ImprimirPromedio() {
    var promedio = calcularPromedioTemporadas();
    var parrafo = document.createElement("p");
    parrafo.innerHTML = "El promedio de temporadas es: ".concat(promedio);
    document.body.appendChild(parrafo);
}
function actualizarTarjeta() {
    var _loop_1 = function (i) {
        var serie = series[i - 1];
        var button = document.getElementById("button-".concat(i));
        button.onclick = function () {
            console.log(serie.nombre);
            imagenTarjeta.setAttribute('src', serie.imagen);
            tituloTarjeta.innerText = serie.nombre;
            descripcionTarjeta.innerText = serie.descripcion;
            linkTarjeta.innerText = serie.link;
            linkTarjeta.setAttribute('href', serie.link);
            linkTarjeta.setAttribute('target', '_blank');
        };
    };
    for (var i = 1; i <= series.length; i++) {
        _loop_1(i);
    }
}
