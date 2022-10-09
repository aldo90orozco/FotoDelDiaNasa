//url de la api de la nasa foto del dia
const API_KEY='ntVkQk66djN1SgsWrdhsc7cgKxONQje4BQGQWSv6';
const API_URL=`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

//llamado a la api
function traerFoto(){
    fetch(API_URL)//ruta
    .then(res=>res.json())//convierte la respuesta a json
    .then(resultado =>mostrarDatos(resultado))
}



function mostrarDatos({title,url,explanation,date}){

    const $foto=document.querySelector('#contenedor-imagen');
    const $tituloFoto=document.querySelector('#titulo-foto');
    $tituloFoto.innerHTML=title;
    const $descripcion=document.querySelector('#descripcion');
    $descripcion.innerHTML=explanation;
    $fecha=document.querySelector('#fecha');
    $fecha=date;
    console.log($fecha)
   


    $foto.innerHTML=`<img src="${url}" alt="" srcset="">`


}

traerFoto()

$columnaCentral=document.querySelector('#columna-central');
$columnaCentral.style.display="none";
$botonMostrarFoto=document.querySelector('.botonMostrarFoto');

$botonMostrarFoto.addEventListener('click',function(){
    $columnaCentral.style.display=""
})