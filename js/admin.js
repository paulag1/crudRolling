import { Contacto } from "./Contacto.js";
import { crearContactoTabla } from "./crearContacto.js";
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
//traigo el string de local storage
let contactosLS = localStorage.getItem("contactos");
console.log(contactosLS);
//convierto ese string en un arreglo de objetos, para recuperar la inf:
contactosLS = JSON.parse(contactosLS);
//console.log(contactosLS);

//aqui voy a almacenar toda mi agenda:
let contactos = [];

//si contactosLS me trajo un objeto voy a decirle a contactos que ya no sea un arreglo vacio y sea ese contactosLS
if (contactosLS !== null) {
  contactos = contactosLS;

  //ahora necesito que tambien me los muestre a los contactos al recargar la pag
  contactos.forEach(elemento =>{
    crearContactoTabla(elemento)
  })
}

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

const agregarContactoALS = (contacto) =>{
  //agrego contacto a la lista:
  contactos.push(contacto);
  
  //para transformar el objeto a texto y poder guardarlo en el local storage:
  const contactosJSON = JSON.stringify(contactos); //JavaScript Object Notation
  //console.log(contactosJSON);

  //para guardarlo dentro del local storage:
  localStorage.setItem("contactos", contactosJSON);
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
    crearContactoTabla(contacto);
    //le paso a mi funcion crearcontacto, el objeto contacto que estoy creando
    agregarContactoALS(contacto)
  } else {
    console.log("Algun dato no es valido");
  }
});
