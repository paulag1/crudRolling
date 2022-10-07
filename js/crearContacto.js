//estructura de tabla
export const crearContactoTabla = (contacto) => {
  const tbody = document.getElementById("tbody__admin");
  //lo que va a hacer con este contacto es agregarlo a la tabla:
  //estamos creando etiquetas vacias:
  const tr = document.createElement("tr");

  // desde aca es un proceso que es repetitivo para cada celda
  const td1 = document.createElement("td");

  td1.innerText = contacto.codigo;
  //ahora lo que tenemos que hacer es que este td se agregue como hijo del tr (como el th del tr en el thead)
  tr.appendChild(td1);
  //

    //
    const td5 = document.createElement("td");
    const img = document.createElement("img");
  
    img.src = contacto.imagen;
    img.alt= contacto.nombre
    img.style.width = '100px'
    img.style.height= '100px'
    img.style.objectFit= 'cover'
  
    td5.appendChild(img);
  
    tr.appendChild(td5);
    //

  //
  const td2 = document.createElement("td");

  td2.innerText = contacto.nombre;

  tr.appendChild(td2);
  //
  //
  const td3 = document.createElement("td");

  td3.innerText = contacto.telefono;

  tr.appendChild(td3);
  //
  //
  const td4 = document.createElement("td");

  td4.innerText = contacto.email;

  tr.appendChild(td4);
  //

  //
  const td6 = document.createElement("td");

  td6.innerText = contacto.notas;

  tr.appendChild(td6);
  //

  //ahora lo tengo que agregar dentro del tbody
  tbody.appendChild(tr);
  //appendChild va creando hacia abajo
};
//luego debemos traer la informacion del local storage
