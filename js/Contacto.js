//como pongo la primera letra con mayuscula estoy por crear una clase
//una clase es el molde por el que voy a crear objetos, los cuales tienen propiedades y metodos

 export class Contacto{
    constructor(nombre,telefono,email,imagen,notas){
        this.nombre= nombre
        this.telefono= telefono
        this.email= email
        this.imagen= imagen
        this.notas= notas
        this.codigo= Math.floor(Math.random()*100) //para que sea un num entero

    }
}