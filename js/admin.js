import { Contacto } from "./Contacto.js";
import {
  validateEmail,
  validateName,
  validateNumber,
  validateURL,
} from "./validators.js";

/*
const nombre = "Eze";
const telefono = "123456789";
const email = "eze@gmail.com";
const URL = "https://regexr.com/39nr7";


*/
let contactos = []

const formularioContacto = document.getElementById("formContacto");

const campoNombre = document.getElementById("nombreContacto");
const campoTelefono = document.getElementById("telefonoContacto");
const campoEmail = document.getElementById("emailContacto");
const campoImagen = document.getElementById("imagenContacto");
const campoNotas = document.getElementById("notasContacto");

//declaramos variables iniciales:
let nombre = "";
let telefono = "";
let email = "";
let imagen = "";
let notas = "";

campoNombre.addEventListener("blur", (e) => {
  if (validateName(e.target.value, campoNombre)) {
    nombre = e.target.value;   
}
});
//e.target.value es el valor que el usario tipea en la pagina
campoTelefono.addEventListener("blur", (e) => {
  if (validateNumber(e.target.value, campoTelefono)) {
    telefono = e.target.value;
    
  }
});
campoEmail.addEventListener("blur", (e) => {
  if (validateEmail(e.target.value, campoEmail)) {
    email = e.target.value;
  } 
});
campoImagen.addEventListener("blur", (e) => {
  if (validateURL(e.target.value, campoImagen)) {
    imagen = e.target.value;
  }
});
campoNotas.addEventListener("blur", (e) => {
  notas = e.target.value;
});


//estructura de tabla
const crearContacto = (contacto) => {
  const tbody = document.getElementById('tbody__admin')
  //lo que va a hacer con este contacto es agregarlo a la tabla:
  //estamos creando etiquetas vacias:
  const tr = document.createElement('tr')

// desde aca es un proceso que es repetitivo para cada celda
  const td1 = document.createElement('td')

  td1.innerText = contacto.codigo
  //ahora lo que tenemos que hacer es que este td se agregue como hijo del tr (como el th del tr en el thead)
  tr.appendChild(td1)
//
// 
  const td2 = document.createElement('td')

  td2.innerText = contacto.nombre
 
  tr.appendChild(td2)
//
// 
  const td3 = document.createElement('td')

  td3.innerText = contacto.telefono
 
  tr.appendChild(td3)
//
// 
  const td4 = document.createElement('td')

  td4.innerText = contacto.email
 
  tr.appendChild(td4)
//
// 
  const td5 = document.createElement('td')

  td5.innerText = contacto.imagen
 
  tr.appendChild(td5)
//
// 
  const td6 = document.createElement('td')

  td6.innerText = contacto.notas
 
  tr.appendChild(td6)
//

  //ahora lo tengo que agregar dentro del tbody
  tbody.appendChild(tr)
  //appendChild va creando hacia abajo

  //agrego contacto a la lista:
  contactos.push(contacto)

//para transformar el objeto a texto y poder guardarlo en el local storage:
const contactosJSON = JSON.stringify(contactos) //JavaScript Object Notation
console.log(contactosJSON)

//para guardarlo dentro del local storage:
localStorage.setItem('contactos', contactosJSON)
}




formularioContacto.addEventListener("submit", (e) => {
  e.preventDefault(); //para prevenir que al poner cargar no recarga la pagina
  
  //si pasa cada una de estas pruebas recien se carguen los datos:
  if (
    validateName(nombre, campoNombre) &&
    validateNumber(telefono, campoTelefono) &&
    validateEmail(email, campoEmail) &&
    validateURL(imagen, campoImagen)
  ) {
    const contacto = new Contacto(nombre, telefono, email, imagen, notas);
    //console.log(contacto);
    crearContacto(contacto)
    //le paso a mi funcion crearcontacto, el objeto contacto que estoy creando
  } else {
    console.log("Algun dato no es valido");
  }
});
