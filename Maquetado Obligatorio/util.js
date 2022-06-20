function ocultarMostrarElementos(nombreClass, displayTipo) {
  let secciones = document.querySelectorAll(`.${nombreClass}`);
  for (let i = 0; i < secciones.length; i++) {
    const seccion = secciones[i];
    seccion.style.display = displayTipo;
  }
}

function ocultarElementos(nombreClass) {
  ocultarMostrarElementos(nombreClass, "none");
}

function mostrarElementos(nombreClass) {
  ocultarMostrarElementos(nombreClass, "block");
}

//busca un elemento en un arreglo y lo devuelve
function obtenerElemento(campo, valor, arrParam) {
  let retorno;
  for (const elemento of arrParam) {
    if (elemento[campo] === valor) {
      retorno = elemento;
      break;
    }
  }
  return retorno;
}

//arma un arreglo con todos los elementos que tengan el valor indicado en el campo indicado.
function obtenerArrayElementos(campo, valor, arrParam) {
  let retorno = [];
  for (const elemento of arrParam) {
    if (elemento[campo] === valor) {
      retorno.push(elemento);
    }
  }
  return retorno;
}

function buscarElementos(valor, campo, arregloParam, caseSensitive) {
  // encontrar si un valor ingresado ya existe en un arreglo.
  let retorno = undefined;
  for (const elemento of arregloParam) {
    let valorObtenido = elemento[campo]; //elemento.nombre
    if (!caseSensitive) {
      valorObtenido = valorObtenido.toLowerCase();
      valor = valor.toLowerCase();
    }

    if (valorObtenido === valor) {
      retorno = elemento;
      break;
    }
  }
  return retorno;
}

function validarPassword(texto) {
  // verifica que la contraseña incluya una minuscula, una mayuscula y un numero.
  let minusculas = 0;
  let mayusculas = 0;
  let numeros = 0;
  for (let i = 0; i < texto.length; i++) {
    let codigoAcci = texto.charCodeAt(i);
    if (codigoAcci >= 65 && codigoAcci <= 90) {
      ++mayusculas;
    } else if (codigoAcci >= 97 && codigoAcci <= 122) {
      ++minusculas;
    } else if (codigoAcci >= 48 && codigoAcci <= 57) {
      ++numeros;
    }
  }

  if (numeros > 0 && mayusculas > 0 && minusculas > 0) {
    return true;
  } else {
    return false;
  }
}

// calcula el total de cupos pendientes de un local
function sumarCuposLocal(idLocal) {
  let arregloLocales = buscarReservas(idLocal, LOCAL, PENDIENTE);

  let suma = 0;
  for (const reserva of arregloLocales) {
    suma += reserva.cantCupos;
  }

  return suma;
}

//calcula promedio de calificaciones de un local
function promedioCalificacionesLocal(idLocal) {
  let arregloLocales = buscarReservas(idLocal, LOCAL, FINALIZADA);

  let suma = 0;
  let contador = 0;
  for (const reserva of arregloLocales) {
    if (reserva.calificacion !== undefined) {
      suma += reserva.calificacion;
      contador++;
    }
  }

  return suma / contador;
}

// arma un arreglo de reservas de determinado usuario para determinado estado
function buscarReservas(idBuscar, usuario, estado) {
  let retorno = [];

  for (const reserva of reservas) {
    if (reserva.estado === estado) {
      if (usuario === LOCAL && reserva.idLocal === idBuscar) {
        retorno.push(reserva);
      } else if (usuario === PERSONA && reserva.idPersona === idBuscar) {
        retorno.push(reserva);
      }
    }
  }
  return retorno;
}

// arma un arreglo con todas las reservas de una persona sin importar el estado
function buscarReservasPersona(idPersona) {
  let retorno = [];

  for (const reserva of reservas) {
    if (reserva.idPersona === idPersona) {
      retorno.push(reserva);
    }
  }
  return retorno;
}

// Suma todas las reservas de una persona en un local sin importar el estado de la reserva
function sumarReservasPersonaLocal(idPersona, idLocal) {
  let suma = 0;
  for (const reserva of reservas) {
    if (reserva.idPersona === idPersona && reserva.idLocal === idLocal) {
      suma++;
    }
  }

  return suma;
}

// Suma todas las reservas de un local sin importar el estado de la reserva
function sumarReservasLocal(idLocal) {
  let suma = 0;
  for (const reserva of reservas) {
    if (reserva.idLocal === idLocal) {
      suma++;
    }
  }

  return suma;
}

//a partir de un arreglo de reservas, formamos un nuevo arreglo con el id de los locales sin repetirse
function arregloLocalesSinRepetir(arregloReservas) {
  let nuevoArreglo = [];
  for (const elemento of arregloReservas) {
    let idLocal = elemento.idLocal;

    let indice = nuevoArreglo.indexOf(idLocal);
    if (indice == -1) {
      nuevoArreglo.push(idLocal);
    }
  }
  return nuevoArreglo;
}
