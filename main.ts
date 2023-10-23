import{Serie}from './serie.js';
import {series} from './data.js';

let contenidoTabla: HTMLElement = document.getElementById('contenido')!;
let imagenTarjeta: HTMLElement = document.getElementById('imagen')!;
let tituloTarjeta: HTMLElement = document.getElementById('titulo')!;
let descripcionTarjeta: HTMLElement = document.getElementById('descripcion')!;
let linkTarjeta: HTMLElement = document.getElementById('link')!;


mostrarTabla(series);
ImprimirPromedio();
actualizarTarjeta();


function mostrarTabla(series:Serie[]):void{
    let Tbody: HTMLElement = document.createElement("tbody");
  for (let serie of series) {
    console.log(serie);
    let row: HTMLElement = document.createElement("tr");
    row.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.nombre}</td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>
        `;
    Tbody.appendChild(row);
    
  }
  contenidoTabla.appendChild(Tbody);
}


function calcularPromedioTemporadas():number{
    let suma:number = 0;
    let n:number = series.length;
    for(let serie of series){
        suma += serie.temporadas;
    }
    let promedio = suma / n;
    return promedio;
}

function ImprimirPromedio():void{
    let promedio:number = calcularPromedioTemporadas();
    let parrafo: HTMLParagraphElement = document.createElement("p");
    parrafo.innerHTML = `El promedio de temporadas es: ${promedio}`;
    document.body.appendChild(parrafo);
}

function actualizarTarjeta():void{
    for (let i = 1; i <= series.length; i++){
        let serie:Serie = series[i-1];
        let button:HTMLElement = document.getElementById(`button-${i}`)!;
        button.onclick = () => {
            console.log(serie.nombre);
            imagenTarjeta.setAttribute('src', serie.imagen);
            tituloTarjeta.innerText = serie.nombre;
            descripcionTarjeta.innerText = serie.descripcion;
            linkTarjeta.innerText = serie.link;
            linkTarjeta.setAttribute('href', serie.link);
            linkTarjeta.setAttribute('target', '_blank');
        }
    }
}