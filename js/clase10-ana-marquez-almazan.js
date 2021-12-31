//Al cargar documento realiza animacion de imagen y crea el html lista inversionistas y empresas
$(document).ready(function(){
    
    var image = $("#image");
        image.animate({height: '400px', opacity: '1.0'}, "slow");
        image.animate({width: '400px', opacity: '1.0'}, "slow");
    //Mensaje superior promo
    $("#promo-message").click(function(){
        $("#promo-text").slideToggle("slow");
    });


    //URL para usar el GET
    const URLGET = "js/lista.json";
    $("body").show(()=>{
        $.get(URLGET, function(respuesta,estado){
        if(estado === "success"){
            console.log(respuesta);
            let miLista = respuesta;
            for(const lista of miLista){
                $("#lista").prepend(
                    `<div class="card bg-light mb-6 col-md-6 col-sm-12 m-1">
                        <div class="pl-3 pt-3 -pb-2">
                            <h3 class="card-title">${lista.title}</h3>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${lista.subtitle}</h5>
                            <p class="card-text"><i class="far fa-check-circle p-1 text-warning"></i>${lista.beneficio1}</p>
                            <p class="card-text"><i class="far fa-check-circle p-1 text-warning"></i>${lista.beneficio2}</p>
                            <p class="card-text"><i class="far fa-check-circle p-1 text-warning"></i>${lista.beneficio3}</p>
                            <p class="card-text"><i class="far fa-check-circle p-1 text-warning"></i>${lista.beneficio4}</p>
                        </div>
                    </div>`
                );
            }
        }
     });
    });
    

});

//variables
let cantidadprestamo;
let plazoprestamo;
let cuota;
let cuotapromedio;
let cuotabanco;
let tasamensual = 0.74;
let tasapromedio = 18.5;
let tasanual = 8.9;
let tasamensualpromedio = 1.5;
let tasabanco = 45;
let tasamensualbanco = 3.75;


//Evento de DOM
let boton = document.getElementById("botonCalcular");
//nombre de variable + evento click + nombre de funcion
boton.addEventListener("click",capturaPrestamo);

function capturaPrestamo(){
    function Prestamo (cantidadprestamo, tasamensual, plazoprestamo, cuota, tasapromedio, tasabanco){
        this.cantidadprestamo = cantidadprestamo;
        this.plazoprestamo = plazoprestamo;
        this.tasamensual = tasamensual;
        this.tasamensualpromedio = tasamensualpromedio;
        this.tasamensualbanco = tasamensualbanco;
        this.tasapromedio = tasapromedio;
        this.tasabanco = tasabanco;
        this.cuota = cuota;
        //Calculo de cuota
        this.cuota =  (this.cantidadprestamo * (Math.pow(1+this.tasamensual/100, this.plazoprestamo)*this.tasamensual/100)/(Math.pow(1+this.tasamensual/100, this.plazoprestamo)-1)).toFixed(2);
        //Calculo de cuota promedio
        this.cuotapromedio = (this.cantidadprestamo * (Math.pow(1+this.tasamensualpromedio/100, this.plazoprestamo)*this.tasamensualpromedio/100)/(Math.pow(1+this.tasamensualpromedio/100, this.plazoprestamo)-1)).toFixed(2);
        //Calculo de cuota banco
        this.cuotabanco = (this.cantidadprestamo * (Math.pow(1+this.tasamensualbanco/100, this.plazoprestamo)*this.tasamensualbanco/100)/(Math.pow(1+this.tasamensualbanco/100, this.plazoprestamo)-1)).toFixed(2);
    }
        cantidadprestamoCaptura = parseFloat(document.getElementById("cantidadprestamo").value);
        plazoprestamoCaptura = parseFloat(document.getElementById("plazoprestamo").value);
        prestamo1 = new Prestamo(cantidadprestamoCaptura, tasamensual, plazoprestamoCaptura, cuota, cuotapromedio, cuotabanco);
        
        console.log(prestamo1);
        agregar();
}

let listaPrestamo = [];

function agregar(){
    document.getElementById("tablePrestamo").innerHTML += '<tbody><tr><td>'+ "Tasa interés anual" +'</td><td>'+tasanual+"%"+'</td><td>'+tasapromedio+'%'+'</td><td>'+tasabanco+'%'+'</td></tr><tr><td>'+ "Pago mensual" +'</td><td>'+prestamo1.cuota+"%"+'</td><td>'+prestamo1.cuotapromedio+'%'+'</td><td>'+prestamo1.cuotabanco+'%'+'</td></tr></tbody>';
};
//Mostrar table comparativa
function show(){
    var element = document.getElementById("table");
    element.classList.remove("hide");
}

//Crear HTML
//Clase de producto
class Beneficios {
    constructor (imagen, titulo){
        this.imagen = imagen;
        this.titulo = titulo;
    }
}


//Array detalle producto
const beneficios = 
    [
    {imagen:"tasas-bajas.svg" , titulo:"Las tasas más bajas"},
    {imagen:"pagos-fijos.svg" , titulo:"Pagos fijos"},
    {imagen:"plazos.svg" , titulo:"Plazos de 6 a 36 meses"},
    {imagen:"sin-avales.svg" , titulo:"Sin garantías ni avales"}
    ]; 

    const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

    //Recorrer y almacenar
    for (const beneficio of beneficios) {
        guardarLocal(beneficio.titulo, JSON.stringify(beneficio));
    }

    guardarLocal ("listaBeneficios", JSON.stringify(beneficios));
    console.log("Lista Beneficios " + localStorage.getItem("listaBeneficios"));


var contenido = "";
var i = 1;

//Crear HTML
for (let beneficio of beneficios ) {
    contenido += "<div class='col-sm-12 col-lg-3 text-center'>";
    contenido += "<div class='p-5'>";
    contenido += "<img id='waffle_imagen" + i + "' src='images/" + beneficio.imagen + "' class='card-img-top' alt='" + beneficio.titulo + ">";
    contenido += "<div class='card-body'>";
    contenido += "<h5 class='mt-5'>" + beneficio.titulo + "</h5>";
    contenido += "</div>";
    contenido += "</div>";
    contenido += "</div>";
    i++;
}

var contenedor = document.getElementById("waffles_contenedor");
contenedor.innerHTML = contenido;