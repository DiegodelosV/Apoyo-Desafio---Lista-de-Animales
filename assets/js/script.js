let formulario = document.querySelector("form");
let agregar = (event) => {
  event.preventDefault();
  let propietario = document.getElementById("propietario").value;
  let nombreMascota = document.getElementById("nombreMascota").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let tipo = document.getElementById("tipo").value;
  let enfermedad = document.getElementById("enfermedad").value;

  switch (tipo) {
    case "perro":
      const perro = new Mascota(
        propietario,
        direccion,
        telefono,
        tipo,
        nombreMascota,
        enfermedad
      );
      mostrarDatos(perro);
      break;
    case "gato":
      const gato = new Mascota(
        propietario,
        direccion,
        telefono,
        tipo,
        nombreMascota,
        enfermedad
      );
      mostrarDatos(gato);
      break;
    case "conejo":
      const conejo = new Mascota(
        propietario,
        direccion,
        telefono,
        tipo,
        nombreMascota,
        enfermedad
      );
      mostrarDatos(conejo);
      break;
  }
};

//mostar resultados
let mostrarDatos = (Mascota) => {
  let resultado = document.querySelector("#resultado ul");
  let mensajePropietario = `${Mascota.datosPropietario()}`;
  let mensajeMascota = `El tipo de aminal es un: ${Mascota._tipo}, mientras que su nombre es: ${Mascota._nombreMascota} y su enfermedad es: ${Mascota.enfermedad}`;

  let mensajeFinal =
    "<li>" + mensajePropietario + "</li><li>" + mensajeMascota + "</li>";
  resultado.innerHTML = mensajeFinal;
};

formulario.addEventListener("submit", agregar);

//clase padre: Propietario, atributos: nombre, direccion,telefono. metodo: datosPropetario()

//clase hija:Animal, atributos: tipo. metodo: get tipo()

//clase hija: Mascota, atributos: nombre, enfermedad. metodos: get nombre(), set nombre(), get enfermedad(), set enfermedad()

class Propietario {
  //clase padre
  constructor(nombrePropietario, direccion, telefono) {
    this._nombrePropietario = nombrePropietario;
    this.direccion = direccion;
    this.telefono = telefono;
  }

  get nombrePropietario() {
    //metodo get para obtener el nombre
    return this._nombrePropietario;
  }

  set nombrePropietario(nuevoNombrePropietario) {
    //metodo set para cambiar el nombre
    this._nuevoNombrePropietario = nuevoNombrePropietario;
  }

  datosPropietario() {
    //metodo para mostrar los datos
    return `El nombre del propietario es: ${this.nombrePropietario}, vive en ${this.direccion} y su numero de telefono es: ${this.telefono}.`;
  }
}

class Animal extends Propietario {
  //clase hija que hereda de la clase padre
  constructor(nombrePropietario, direccion, telefono, tipo) {
    super(nombrePropietario, direccion, telefono); //llama al constructor de la clase padre
    this._tipo = tipo;
  }
  //   Crear un método get para la clase Animal de la propiedad tipo para retornar el
  //   mensaje “El tipo de animal es un: ${this.tipo}”.
  get tipo() {
    return `El tipo de animal es un: ${this._tipo}`;
  }
}

class Mascota extends Animal {
  //clase hija que hereda de la clase padre
  constructor(
    nombrePropietario,
    direccion,
    telefono,
    tipo,
    nombreMascota,
    enfermedad
  ) {
    super(nombrePropietario, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }

  get nombreMascota() {
    return this._nombreMascota;
  }

  set nombreMascota(nuevoNombreMascota) {
    this._NombreMascota = nuevoNombreMascota;
  }

  get enfermedad() {
    return this._enfermedad;
  }

  set enfermedad(nuevaEnfermedad) {
    this._enfermedad = nuevaEnfermedad;
  }
}
