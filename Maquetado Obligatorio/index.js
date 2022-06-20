window.addEventListener("load", inicio);

const persona1 = new Personas(1, "Bart", "Bartx", "Bart12");
const persona2 = new Personas(2, "Homer", "Homerx", "Homer12");
const persona3 = new Personas(3, "Lisa", "Lisax", "Lisa12");
const persona4 = new Personas(4, "Lucas", "Lucasx", "Lucas12");
const persona5 = new Personas(5, "Gaston", "Gastonx", "Gaston12");
const persona6 = new Personas(6, "Ignacio", "Ignaciox", "Ignacio12");
const persona7 = new Personas(7, "Messi", "Messix", "Messi12");

let personas = [
  persona1,
  persona2,
  persona3,
  persona4,
  persona5,
  persona6,
  persona7,
];

const local1 = new Locales(
  1,
  "Mediterraneo",
  "Mediterraneox",
  "Medi12",
  "restaurant",
  "España 3401",
  40,
  `<img src="img/foto6.jpg"`,
  true
);
const local2 = new Locales(
  2,
  "Pasiva",
  "Pasivax",
  "Pasi12",
  "restaurant",
  "Boulevard 1414",
  55,
  `<img src="img/foto5.jpg"`,
  true
);
const local3 = new Locales(
  3,
  "Focaccia",
  "Focacciax",
  "Foca12",
  "restaurant",
  "Italia 3001",
  20,
  `<img src="img/foto4.jpg"`,
  true
);
const local4 = new Locales(
  4,
  "Blanes",
  "Blanesx",
  "Blanes12",
  "museo",
  "Parque rodo 0921",
  30,
  `<img src="img/foto7.jpg"`,
  true
);
const local5 = new Locales(
  5,
  "Da Vinci",
  "Da Vinci",
  "Da12",
  "museo",
  "Napoli 9212",
  45,
  `<img src="img/foto2.jpg"`,
  true
);
const local6 = new Locales(
  6,
  "Opera",
  "Operax",
  "Opera12",
  "teatro",
  "brasil",
  100,
  `<img src="img/foto1.jpg"`,
  true
);
const local7 = new Locales(
  7,
  "Metro",
  "Metrox",
  "Metro12",
  "teatro",
  "18 de Julio 9898",
  120,
  `<img src="img/foto3.jpg"`,
  true
);

let locales = [local1, local2, local3, local4, local5, local6, local7];

const FINALIZADA = "Finalizada";
const PENDIENTE = "Pendiente";
const CANCELADA = "Cancelada";

const reserva1 = new Reservas(1, 1, 1, PENDIENTE, 5, undefined);
const reserva2 = new Reservas(2, 2, 2, PENDIENTE, 4, undefined);
const reserva3 = new Reservas(3, 3, 3, CANCELADA, 3, undefined);
const reserva4 = new Reservas(4, 4, 4, FINALIZADA, 5, undefined);
const reserva5 = new Reservas(5, 5, 4, PENDIENTE, 5, undefined);
const reserva6 = new Reservas(6, 6, 5, FINALIZADA, 5, undefined);
const reserva7 = new Reservas(7, 7, 5, PENDIENTE, 5, undefined);

let reservas = [
  reserva1,
  reserva2,
  reserva3,
  reserva4,
  reserva5,
  reserva6,
  reserva7,
];

const LOCAL = "LOCAL";
const PERSONA = "PERSONA";

let localLogueado;
let personaLogueada;

function inicio() {
  document
    .querySelector("#menuPersona")
    .addEventListener("click", verMenuPersona);
  document
    .querySelector("#loginLocal")
    .addEventListener("click", verLoginLocal);
  document
    .querySelector("#ingresar")
    .addEventListener("click", verLoginPersona);
  document
    .querySelector("#registrarse")
    .addEventListener("click", verRegistroPersona);
  document
    .querySelector("#realizarReserva")
    .addEventListener("click", verRealizarReservaPersona);
  document
    .querySelector("#verReservasPendientes")
    .addEventListener("click", verReservasPendientesPersona);
  document
    .querySelector("#verReservasFinalizadas")
    .addEventListener("click", verReservasFinalizadasPersona);
  document
    .querySelector("#verEstadisticasPersona")
    .addEventListener("click", verEstadisticasPersona);
  document
    .querySelector("#verDisponibilidad")
    .addEventListener("click", verDisponibilidad);
  document
    .querySelector("#verReservasLocal")
    .addEventListener("click", verReservasLocal);
  document
    .querySelector("#verEstadisticasLocal")
    .addEventListener("click", verEstadisticasLocal);
  document
    .querySelector("#modCupoMaximo")
    .addEventListener("click", verModificarCupoMaximo);
  document.querySelector("#salir").addEventListener("click", salir);

  ocultarElementos("menu"); //se ocultan los menu
  ocultarElementos("seccion"); //se ocultan las secciones
}

//---------------- ACÁ EMPIEZA LOGIN PERSONA ----------------

function verMenuPersona() {
  ocultarElementos("menu");
  ocultarElementos("seccion");
  ocultarElementos("sinLogin");
  mostrarElementos("PersonaPaso1");
  mostrarElementos("cerrarSesion");
}

function verLoginPersona() {
  ocultarElementos("menu");
  ocultarElementos("seccion");
  ocultarElementos("sinLogin");
  mostrarElementos("PersonaPaso1");
  mostrarElementos("ingresar");
  mostrarElementos("cerrarSesion");

  document.querySelector("#btnIng").addEventListener("click", loginPersona);
}
function loginPersona() {
  // si el usuario es ya existente y la contraseña coincide con el mismo, pasamos a la seccion de persona logueada.
  const usuario = document.querySelector("#ingUsuario").value;
  const password = document.querySelector("#ingPassword").value;
  let usuarioEncontrado = buscarElementos(usuario, "usuario", personas, false);
  if (
    usuarioEncontrado != undefined &&
    usuarioEncontrado.password === password
  ) {
    localLogueado = undefined;
    personaLogueada = usuarioEncontrado;
    ocultarElementos("menu");
    ocultarElementos("seccion");
    ocultarElementos("sinLogin");
    mostrarElementos("PersonaLogueada");
    mostrarElementos("cerrarSesion");
    document.querySelector("#ingUsuario").value = "";
    document.querySelector("#ingPassword").value = "";
  } else {
    alert("Usuario o contraseña no coinciden");
  }
}

function verRegistroPersona() {
  ocultarElementos("menu");
  ocultarElementos("seccion");
  ocultarElementos("sinLogin");
  mostrarElementos("PersonaPaso1");
  mostrarElementos("registro");
  mostrarElementos("cerrarSesion");

  document.querySelector("#btnReg").addEventListener("click", registrarPersona);
}

function registrarPersona() {
  // funcion que se encargara del registro de las nuevas personas.
  let nuevoNombre = document.querySelector("#regNombre").value;
  let nuevoPassword = document.querySelector("#regPassword").value;
  let nuevoUsuario = document.querySelector("#regUsuario").value;
  let nuevaPersona = new Personas(
    personas.length + 1,
    nuevoNombre,
    nuevoUsuario,
    nuevoPassword
  );
  let pushearRegistro = true;
  document.querySelector("#passwordError").innerHTML = ""; // limpie los mensajes de error antes de las evaluaciones de abajo.
  document.querySelector("#registroError").innerHTML = "";

  if (nuevoNombre == "" || nuevoPassword == "" || nuevoUsuario == "") {
    alert("verifique bien los datos");
  }

  if (
    buscarElementos(nuevoUsuario, "usuario", personas, false) != undefined ||
    buscarElementos(nuevoUsuario, "usuarioL", locales, false) != undefined
  ) {
    // se verifica que el usuario exista tanto en personas como en locales, de ser el caso se emite el mensaje y se modifica la variable pushearRegistro para impedir el registro.
    document.querySelector("#registroError").innerHTML =
      "Este usuario no esta disponible.";
    pushearRegistro = false;
  }
  if (nuevoPassword.length < 6 || validarPassword(nuevoPassword) === false) {
    // si la palabra tiene menos de 6 caracteres o el password no es valido, se lanza el mensaje y se modifica la variable pushearPersonaa false para impedir el registro.
    document.querySelector("#passwordError").innerHTML =
      "La contraseña deberá tener un mínimo de 6 caracteres, contando con al menos una mayúscula, una minúscula y un número.";
    pushearRegistro = false;
  }

  if (pushearRegistro) {
    // si la variable pushearPersona no fue modificada en los anteriores if (dado que cumple las condiciones para el registro) se pushea al arreglo.
    personas.push(nuevaPersona);
    alert("nuevo usuario creado con exito!");
    console.log(personas);
    document.querySelector("#passwordError").innerHTML = "";
    document.querySelector("#registroError").innerHTML = "";
    document.querySelector("#regNombre").value = "";
    document.querySelector("#regPassword").value = "";
    document.querySelector("#regUsuario").value = "";
  }
}

//---------------- ACÁ EMPIEZA LOGIN LOCAL ----------------

function verLoginLocal() {
  ocultarElementos("menu");
  ocultarElementos("seccion");
  ocultarElementos("sinLogin");
  mostrarElementos("ingLocal");
  mostrarElementos("cerrarSesion");

  document.querySelector("#btnIngLocal").addEventListener("click", loginLocal);
}

function loginLocal() {
  const usuario = document.querySelector("#ingUsuarioLocal").value;
  const password = document.querySelector("#ingPasswordLocal").value;
  let usuarioEncontrado = buscarElementos(usuario, "usuarioL", locales, false);
  // se verifican las condiciones del usuario
  if (
    usuarioEncontrado != undefined &&
    usuarioEncontrado.password === password
  ) {
    localLogueado = usuarioEncontrado; // se carga la variable localLogueado
    personaLogueada = undefined;
    ocultarElementos("menu");
    ocultarElementos("seccion");
    ocultarElementos("sinLogin");
    mostrarElementos("LocalLogueado");
    mostrarElementos("cerrarSesion");
    document.querySelector("#ingUsuarioLocal").value = "";
    document.querySelector("#ingPasswordLocal").value = "";
  } else {
    alert("Usuario o contraseña no coinciden");
  }
}

//---------------- FUNCIÓN SALIR ----------------

function salir() {
  // vuelve al inicio de la pagina.
  ocultarElementos("menu");
  ocultarElementos("seccion");
  mostrarElementos("sinLogin");
}

//---------------- ACÁ EMPIEZAN LAS SECCIONES PERSONA ----------------

function verRealizarReservaPersona() {
  ocultarElementos("menu");
  ocultarElementos("seccion");
  ocultarElementos("sinLogin");
  mostrarElementos("reservasPersona");
  mostrarElementos("PersonaLogueada");
  mostrarElementos("cerrarSesion");

  let mensaje = `<option value=""></option>`;
  for (const local of locales) {
    if (local.habilitado === true) {
      mensaje += `<option value="${local.id}">${local.nombreL}</option>`;
    }
  }
  document.querySelector("#selectLocales").innerHTML = mensaje; //se agrega mensaje
  document.querySelector("#btnReservar").addEventListener("click", reservar);
}

function reservar() {
  let alerta = "";
  let idLocal = Number(document.querySelector("#selectLocales").value);
  let cantCupos = Number(document.querySelector("#cupos").value);

  let arregloPendientes = buscarReservas(
    personaLogueada.id,
    PERSONA,
    PENDIENTE
  );

  let totalCuposLocal = sumarCuposLocal(idLocal) + cantCupos;

  let local = obtenerElemento("id", idLocal, locales);
  console.log("local", local);

  let nuevaReserva = new Reservas(
    reservas.length + 1,
    idLocal,
    personaLogueada.id,
    PENDIENTE,
    cantCupos,
    undefined
  );

  let pushearReserva = true;

  if (local.cupoMaximo < totalCuposLocal) {
    pushearReserva = false;
    alerta += `La cantidad de cupos es mayor a la disponibilidad del local.

    `;
  }

  for (const reserva of arregloPendientes) {
    if (idLocal === reserva.idLocal) {
      pushearReserva = false;
      alerta += `Ya tienes una reserva pendiente en este local.
      
      `;
      document.querySelector("#cupos").value = "";
      break;
    }
  }

  if (pushearReserva) {
    // si la variable pushearReserva no fue modificada en los anteriores if (dado que cumple las condiciones para la reserva) se pushea al arreglo.
    reservas.push(nuevaReserva);

    alert("Nueva reserva creada con exito!");

    document.querySelector("#selectLocales").value = "";
    document.querySelector("#cupos").value = "";
  } else {
    alert(`${alerta}`);
  }

  if (local.cupoMaximo == totalCuposLocal) {
    local.habilitado = false;
  }

  verRealizarReservaPersona();
}

function verReservasPendientesPersona() {
  ocultarElementos("menu");
  ocultarElementos("seccion");
  ocultarElementos("sinLogin");
  mostrarElementos("PersonaLogueada");
  mostrarElementos("cerrarSesion");
  mostrarElementos("reservasPendientes");

  listarReservasPendientes();
}

function listarReservasPendientes() {
  let mensaje = "";
  let arregloReservas = buscarReservas(personaLogueada.id, PERSONA, PENDIENTE);

  for (const reserva of arregloReservas) {
    const local = obtenerElemento("id", reserva.idLocal, locales);
    mensaje += `<tr>
          <td>${local.foto}</td>
          <td>${local.nombreL}</td>
          <td>${reserva.cantCupos}</td>
          <td><input type="button" data-boton="${reserva.id}" class="clsBtnCancelar" value="Cancelar"></td>
            </tr>`;
  }

  document.querySelector("#tblPendientesPersona").innerHTML = mensaje;

  let todosBotones = document.querySelectorAll(".clsBtnCancelar");
  for (const boton of todosBotones) {
    boton.addEventListener("click", cancelar);
  }
}

function cancelar() {
  //el this representa el input del boton
  let idReserva = Number(this.getAttribute("data-boton"));
  let conf = confirm("Seguro que desea cancelar?");
  if (conf) {
    let reserva = obtenerElemento("id", idReserva, reservas);
    reserva.estado = CANCELADA;
  }
  listarReservasPendientes();
}

function verReservasFinalizadasPersona() {
  ocultarElementos("menu");
  ocultarElementos("seccion");
  ocultarElementos("sinLogin");
  mostrarElementos("PersonaLogueada");
  mostrarElementos("cerrarSesion");
  mostrarElementos("reservasFinalizadas");

  listarReservasFinalizadas();
  listarReservasCalificadas();
}

function listarReservasFinalizadas() {
  let mensaje = "";
  let arregloReservas = buscarReservas(personaLogueada.id, PERSONA, FINALIZADA);

  for (const reserva of arregloReservas) {
    if (!reserva.calificacion) {
      const local = obtenerElemento("id", reserva.idLocal, locales);
      mensaje += `<tr>
          <td>${reserva.id}</td>
          <td>${local.foto}</td>
          <td>${local.nombreL}</td>
          <td>${reserva.cantCupos}</td>
          <td><input type="number" data-calificacion="${reserva.id}" class="clsCalificaciones"></td>
            </tr>`;
    } else {
    }
  }

  document.querySelector("#tblFinalizadasPersona").innerHTML = mensaje;

  document.querySelector("#btnCalificar").addEventListener("click", calificar);
}

function calificar() {
  let inputCalificacion = document.querySelectorAll(".clsCalificaciones");

  for (const unaCalificacion of inputCalificacion) {
    const calificacion = Number(unaCalificacion.value);
    if (calificacion) {
      let idReserva = Number(unaCalificacion.getAttribute("data-calificacion"));
      let reserva = obtenerElemento("id", idReserva, reservas);
      if (calificacion >= 1 && calificacion <= 5) {
        reserva.calificacion = calificacion;
      } else {
        alert("Calificar de 1 a 5");
      }
    }
  }
  listarReservasFinalizadas();
  listarReservasCalificadas();
}

function listarReservasCalificadas() {
  let mensaje = "";
  let arregloReservas = buscarReservas(personaLogueada.id, PERSONA, FINALIZADA);

  for (const reserva of arregloReservas) {
    if (reserva.calificacion) {
      const local = obtenerElemento("id", reserva.idLocal, locales);
      mensaje += `<tr>
          <td>${reserva.id}</td>
          <td>${local.foto}</td>
          <td>${local.nombreL}</td>
          <td>${reserva.cantCupos}</td>
          <td>${reserva.calificacion}</td>          
            </tr>`;
    } else {
    }
  }

  document.querySelector("#tblCalificadasPersona").innerHTML = mensaje;
}

function verEstadisticasPersona() {
  ocultarElementos("menu");
  ocultarElementos("seccion");
  ocultarElementos("sinLogin");
  mostrarElementos("PersonaLogueada");
  mostrarElementos("cerrarSesion");
  mostrarElementos("estadisticasPersona");

  let mensaje = "";
  let arregloReservas = buscarReservasPersona(personaLogueada.id);

  let arregloReservasFinalizadas = buscarReservas(
    personaLogueada.id,
    PERSONA,
    FINALIZADA
  );

  //se arma el arreglo con las reservas finalizadas y calificadas
  let arregloReservasCalificadas = [];
  for (const reservaCalificada of arregloReservasFinalizadas) {
    if (reservaCalificada.calificacion) {
      arregloReservasCalificadas.push(reservaCalificada);
    }
  }

  let arregloLocales = arregloLocalesSinRepetir(arregloReservas); // formado con los id de los locales (sin repetir) en los que la persona tiene reservas en todos los estados

  let arrLocalesResCalificadas = arregloLocalesSinRepetir(
    arregloReservasCalificadas
  ); // formado con los id de los locales (sin repetir) en los que la persona tiene reservas finalizadas y calificadas

  for (const idLocalCalificado of arrLocalesResCalificadas) {
    const local = obtenerElemento("id", idLocalCalificado, locales);
    for (const idLocal of arregloLocales) {
      if (idLocalCalificado === idLocal) {
        const cantReservas = sumarReservasPersonaLocal(
          personaLogueada.id,
          local.id
        );
        const reservasLocal = sumarReservasLocal(local.id);

        mensaje += `<tr>
      <td>${local.nombreL}</td>
      <td>${cantReservas}</td>
      <td>${reservasLocal}</td>
      <td>${(cantReservas / reservasLocal) * 100}%</td>
        </tr>`;
      }
    }
  }

  document.querySelector("#tblEstadisticasPersona").innerHTML = mensaje;

  let favorito = "";

  let auxFavorito = 0;
  let localFavorito = [];

  //En este for cargamos la variable auxFavorito con la cantidad de reservas que tiene e local o locales favoritos de la persona logueada
  for (const local of arregloLocales) {
    const reservasLocal = sumarReservasPersonaLocal(personaLogueada.id, local);
    if (reservasLocal >= auxFavorito) {
      auxFavorito = reservasLocal;
    }
  }

  //armamos el arreglo localFavorito con los id de los locales que tienen la cantidad de reservas auxFavorito (de la persona logueada)
  for (const local of arregloLocales) {
    const cantReservas = sumarReservasPersonaLocal(personaLogueada.id, local);
    if (cantReservas === auxFavorito) {
      localFavorito.push(local);
    }
  }

  //con los id de localFavorito obtenemos el objeto local completo.
  //cantReservas es la cantidad de reservas de cada local favorito.
  //y se dibuja la tabla con nombre del local y cantidad de reservas.
  for (const localFav of localFavorito) {
    const local = obtenerElemento("id", localFav, locales);
    const cantReservas = sumarReservasPersonaLocal(
      personaLogueada.id,
      localFav
    );
    favorito += `<tr>
    <td>${local.nombreL}</td>
    <td>${cantReservas}</td>
      </tr>`;
  }

  document.querySelector("#tblLocalFavorito").innerHTML = favorito;
}

//---------------- ACÁ EMPIEZAN LAS SECCIONES LOCAL ----------------

function verDisponibilidad() {
  ocultarElementos("menu");
  ocultarElementos("seccion");
  ocultarElementos("sinLogin");
  mostrarElementos("disponibilidad");
  mostrarElementos("LocalLogueado");
  mostrarElementos("cerrarSesion");

  if (localLogueado.habilitado) {
    document.querySelector("#estadoActual").innerHTML =
      " Estado actual: habilitado";
  } else {
    document.querySelector("#estadoActual").innerHTML =
      " Estado actual: deshabilitado";
  }

  document
    .querySelector("#btnHabilitar")
    .addEventListener("click", modificarEstadoLocal);
}

function modificarEstadoLocal() {
  let estadoLocal = document.querySelector("#estado").value;
  let cantidadCupos = sumarCuposLocal(localLogueado.id);

  if (
    estadoLocal === "habilitado" &&
    cantidadCupos < localLogueado.cupoMaximo
  ) {
    localLogueado.habilitado = true;
  } else if (estadoLocal === "deshabilitado") {
    localLogueado.habilitado = false;
  } else {
    alert("Cupos completos");
  }
  verDisponibilidad();
}

function verReservasLocal() {
  ocultarElementos("menu");
  ocultarElementos("seccion");
  ocultarElementos("sinLogin");
  mostrarElementos("reservasLocal");
  mostrarElementos("LocalLogueado");
  mostrarElementos("cerrarSesion");

  let mensaje = "";
  let arregloReservas = buscarReservas(localLogueado.id, LOCAL, PENDIENTE);

  for (const reserva of arregloReservas) {
    const persona = obtenerElemento("id", reserva.idPersona, personas);
    mensaje += `<tr>
          <td>${reserva.id}</td>
          <td>${persona.nombreP}</td>
          <td>${reserva.cantCupos}</td>
          <td><input type="button" data-boton="${reserva.id}" class="clsBtnFinalizar" value="Finalizar"></td>
            </tr>`;
  }

  document.querySelector("#tblPendientesLocal").innerHTML = mensaje;

  let todosBotones = document.querySelectorAll(".clsBtnFinalizar");
  for (const boton of todosBotones) {
    boton.addEventListener("click", finalizar);
  }

  document.querySelector("#btnBuscador").addEventListener("click", buscar);
}

function buscar() {
  let nombreBuscado = document.querySelector("#buscador").value;
  nombreBuscado = nombreBuscado.toLowerCase();
  let personasEncontrada = [];

  if (nombreBuscado == "") {
    verReservasLocal();
  } else {
    //encontramos los nombres que tienen nombreBuscado como parte del nombre
    for (const persona of personas) {
      let nombrePersona = persona.nombreP;
      nombrePersona = nombrePersona.toLowerCase();
      if (nombrePersona.indexOf(nombreBuscado) !== -1) {
        personasEncontrada.push(persona);
      }
    }
    let mensaje = "";
    let reservasLocalLogueado = obtenerArrayElementos(
      "idLocal",
      localLogueado.id,
      reservas
    );
    for (const persona of personasEncontrada) {
      for (const reserva of reservasLocalLogueado) {
        if (reserva.idPersona === persona.id) {
          const persona = obtenerElemento("id", reserva.idPersona, personas);
          mensaje += `<tr>
          <td>${reserva.id}</td>
          <td>${persona.nombreP}</td>
          <td>${reserva.cantCupos}</td>
          <td><input type="button" data-boton="${reserva.id}" class="clsBtnFinalizar" value="Finalizar"></td>
            </tr>`;
        }
      }
    }

    document.querySelector("#tblPendientesLocal").innerHTML = mensaje;
  }
}

function finalizar() {
  //el this representa el input del boton
  let idReserva = Number(this.getAttribute("data-boton"));
  let conf = confirm("Seguro que desea finalizar?");
  if (conf) {
    let reserva = obtenerElemento("id", idReserva, reservas);
    reserva.estado = FINALIZADA;
  }
  verReservasLocal();
}

function verModificarCupoMaximo() {
  ocultarElementos("menu");
  ocultarElementos("seccion");
  ocultarElementos("sinLogin");
  mostrarElementos("modCupoMaximo");
  mostrarElementos("LocalLogueado");
  mostrarElementos("cerrarSesion");

  let totalCuposLocal = localLogueado.cupoMaximo;
  let cuposReservados = sumarCuposLocal(localLogueado.id);

  document.querySelector("#cuposActuales").innerHTML =
    totalCuposLocal - cuposReservados;

  document.querySelector("#cupoMaxActual").innerHTML = totalCuposLocal;

  document
    .querySelector("#btnModMaximo")
    .addEventListener("click", modificarCupos);
}

function modificarCupos() {
  let nuevoCupoMaximo = Number(document.querySelector("#modMaximo").value);

  let reservasLocal = buscarReservas(localLogueado.id, LOCAL, PENDIENTE);

  if (reservasLocal.length === 0) {
    localLogueado.cupoMaximo = nuevoCupoMaximo;
    document.querySelector("#modMaximo").value = "";
  } else {
    alert("Para modificar cupo no puede haber reservas pendientes");
    document.querySelector("#modMaximo").value = "";
  }

  verModificarCupoMaximo();
}

function verEstadisticasLocal() {
  ocultarElementos("menu");
  ocultarElementos("seccion");
  ocultarElementos("sinLogin");
  mostrarElementos("estadisticasLocal");
  mostrarElementos("LocalLogueado");
  mostrarElementos("cerrarSesion");

  let cuposPendientes = sumarCuposLocal(localLogueado.id);
  let cupoMaximo = localLogueado.cupoMaximo;
  document.querySelector("#ocupacion").innerHTML = `${
    (cuposPendientes / cupoMaximo) * 100
  }%`;

  let promedio = promedioCalificacionesLocal(localLogueado.id);

  if (promedio) {
    document.querySelector("#promedio").innerHTML = promedio;
  } else {
    document.querySelector("#promedio").innerHTML = "No hay calificaciones";
  }

  let tablaPromedios = "";

  for (const local of locales) {
    let promedio = promedioCalificacionesLocal(local.id);
    if (promedio) {
      tablaPromedios += `<tr>
          <td>${local.nombreL}</td>
          <td>${promedio}</td>
            </tr>`;
    }
  }

  document.querySelector("#tblPromedios").innerHTML = tablaPromedios;

  let reservasPendientes = buscarReservas(localLogueado.id, LOCAL, PENDIENTE);
  document.querySelector("#pendientes").innerHTML = reservasPendientes.length;

  let reservasFinalizadas = buscarReservas(localLogueado.id, LOCAL, FINALIZADA);
  document.querySelector("#finalizadas").innerHTML = reservasFinalizadas.length;
}
