//crea la funcion limpiar() que limpia los campos del formulario
// y el campos de producto7UF y renvioCorreo
function limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("codigo").value = "";//selecciona el elemento con id "codigo" y le asigna el valor ""
    document.getElementById("fantasia").value = "";
    document.getElementById("rut").value = "";
    document.getElementById("contacto").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("observaciones").value = "";
    document.getElementById("requerimientos").value = "";
    document.getElementById("sibel").value = "";
    document.getElementById("select").value = "";
    //document.getElementById("producto7UF").value = "";
    //document.getElementById("renvioCorreo").value = "";
}

//el boton "datos adicionales" cambia el atributo de "display" de la clase "datosAdicionales" de "none" a "show"
function datosAdicionales() {
    var x = document.getElementsByClassName("datosAdicionales");
        if (x[0].style.display === "none") {
            x[0].style.display = "block";
         } else {
             x[0].style.display = "none";
        }
}

//al pulsar el boton cerrar se cambia el display de la clase "datosAdicionales" a "none"
function cerrar() {
    document.querySelector(".datosAdicionales").style.display = "none";
}

//el boton "Producto 7UF" cambia el atributo de "display" de la clase "producto7UF" de "none" a "show"
function producto7UF() {
    var x = document.getElementsByClassName("producto7UF");
        if (x[0].style.display === "none") {
            x[0].style.display = "block";
         } else {
             x[0].style.display = "none";
        }
}
//al pulsar el boton cerrar se cambia el display de la clase "producto7UF" a "none"
function cerrar1() {
    document.querySelector(".producto7UF").style.display = "none";
}

//el boton "Renvio de correo" cambia el atributo de "display" de la clase "renvioCorreo" de "none" a "show"
function renvioCorreo() {
    var x = document.getElementsByClassName("renvioCorreo");
        if (x[0].style.display === "none") {
            x[0].style.display = "block";
         } else {
             x[0].style.display = "none";
        }
}
//al pulsar el boton cerrar se cambia el display de la clase "renvioCorreo" a "none"
function cerrar2() {
    document.querySelector(".renvioCorreo").style.display = "none";
}

//si se pulsa el boton "Producto 7UF" y la clase renvioCorreo tiene el display en "block" se cambia a "none"
function renvioCorreo1() {
    var x = document.getElementsByClassName("renvioCorreo");
    var y = document.getElementsByClassName("producto7UF");
        if (y[0].style.display === "block") {
            y[0].style.display = "none";
         } else {
             x[0].style.display = "block";
        }
}

//si se pulsa el boton "Renvio de correo" y la clase producto7UF tiene el display en "block" se cambia a "none"
function producto7UF1() {
    var x = document.getElementsByClassName("renvioCorreo");
    var y = document.getElementsByClassName("producto7UF");
        if (x[0].style.display === "block") {
            x[0].style.display = "none";
         } else {
             y[0].style.display = "block";
        }
}

//crea la funcion agregarAtabla() que agrega los datos del formulario a la tabla
//cada nueva fila tiene "class="id-fila" y cada fila nueva tiene un id="id-fila" con el valor de la variable "row"
//en la celda0 se agrega el numero de la fila
function agregarAtabla() {
    var table = document.getElementById("datosFormularios");
    var row = table.rows.length;
    var cell = table.rows[row - 1].cells;
    var newRow = table.insertRow(row);
    newRow.setAttribute("class", "id-fila");
    newRow.setAttribute("id", "id-fila" + row);
    var cell0 = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);
    var cell3 = newRow.insertCell(3);
    var cell4 = newRow.insertCell(4);
    var cell5 = newRow.insertCell(5);
    var cell6 = newRow.insertCell(6);
    var cell7 = newRow.insertCell(7);
    var cell8 = newRow.insertCell(8);
    var cell9 = newRow.insertCell(9);
    var cell10 = newRow.insertCell(10);
    var cell11 = newRow.insertCell(11);
    var cell12 = newRow.insertCell(12);
    //cell0 es la primera celda de la fila
    //esta celda deve contener el numero de la fila pero a su vez debe estar oculta
    //para que no se vea en la tabla
    //esto se hace en la hoja de estilos 
    cell0.style.display = "none";
    cell0.innerHTML = row;
    cell1.innerHTML = new Date().toLocaleDateString();//agrega la fecha actual en la cell1
    cell2.innerHTML = document.getElementById("codigo").value;//agrega el valor del input con id="codigo" en la cell2
    cell3.innerHTML = document.getElementById("fantasia").value;//agrega el valor del input con id="fantasia" en la cell3
    cell4.innerHTML = document.getElementById("rut").value;//agrega el valor del input con id="rut" en la cell4
    cell5.innerHTML = document.getElementById("sibel").value;//agrega el valor del input con id="sibel" en la cell5
    cell6.innerHTML = document.getElementById("nombre").value;//agrega el valor del input con id="nombre" en la cell6
    cell7.innerHTML = document.getElementById("contacto").value;//agrega el valor del input con id="contacto" en la cell7
    cell8.innerHTML = document.getElementById("correo").value;//agrega el valor del input con id="correo" en la cell8
    cell9.innerHTML = document.getElementById("observaciones").value;//agrega el valor del input con id="observaciones" en la cell9
    cell10.innerHTML = document.getElementById("requerimientos").value+document.getElementById("select").value;//
    //en la celda 11 se agrega un grupo de 4 botones(bootstrap)
    //cada boton tine el mismo id="id-fila" con el valor de la variable "row" y un atributo "onclick" con la funcion correspondiente
    //los botones son: Modificar, eliminar, 7UF, Renvio correo
    cell11.innerHTML = '<button type="button" class="btn btn-primary" id="id-fila' + row + '" onclick="Editar(this)">Editar</button> <button type="button" class="btn btn-danger" id="id-fila' + row + '" onclick="Borrarr(this)">Borrar</button><button type="button" class="btn btn-success" id="id-fila' + row + '" onclick="producto7UF1()">Producto 7UF</button><button type="button" class="btn btn-warning" id="id-fila' + row + '" onclick="renvioCorreo1()">Renvio de correo</button>';
    //cell12.innerHTML = document.getElementById("select").value;//agrega el valor del input con id="select" en la cell12
}

//crea la funcion Borrarr() que borra la fila donde se encuentra el boton "Borrar"
//registra donde se encuentra el boton "Borrar" que se pulso para poder borrar la fila correspondiente
function Borrarr(td) {
    var table = document.getElementById("datosFormularios");
    var row = table.rows.length;
    var cell = table.rows[row - 1].cells;
    var row = td.parentNode.parentNode.rowIndex;
    document.getElementById("datosFormularios").deleteRow(row);
}

// la funcion modificarRegistro()
//crea un campo de texto para modificar todas las celdas de la fila
// y remplaza el boton "Añadir Sibel" por un boton "Guardar"
// registra donde se encuentra el boton "Modificar" que se pulso para poder modificar la fila correspondiente
function Editar(td) {
    var table = document.getElementById("datosFormularios");
    var row = table.rows.length;
    var cell = table.rows[row - 1].cells;
    for (var i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '<input type="text" value="' + cell[i].innerHTML + '">';
    }
    cell[11].innerHTML = '<button type="button" class="btn btn-success" onclick="guardarRegistro()">Guardar</button>';//remplaza el boton "Añadir Sibel" por un boton "Guardar"
    var idFila = event.target.id;//registra el id del boton "Modificar" que se pulso
    var idFila = idFila.replace("id-fila", "");//elimina el texto "id-fila" del id del boton "Modificar" que se pulso
    var idFila = parseInt(idFila);//convierte el id del boton "Modificar" que se pulso a numero
    var idFila = idFila - 1;//resta 1 al id del boton "Modificar" que se pulso
    var idFila = idFila.toString();//convierte el id del boton "Modificar" que se pulso a texto
    document.getElementById("idFila").value = idFila;//guarda el id del boton "Modificar" que se pulso en el input con id="idFila"
}


//la funcion guardarRegistro() guarda los cambios realizados en la fila
//y remplaza el boton "Guardar" por un boton Modificar
function guardarRegistro() {
    var table = document.getElementById("datosFormularios");
    var row = table.rows.length;
    var cell = table.rows[row - 1].cells;//registra la fila donde se encuentra el boton "Guardar"
    for (var i = 1; i < cell.length; i++) {//el ciclo for empieza en 1 para no modificar la celda 0 que contiene el numero de fila
        cell[i].innerHTML = cell[i].firstChild.value;//guarda los cambios realizados en la fila
    }
    cell[11].innerHTML = '<button type="button" class="btn btn-primary" id="id-fila' + row + '" onclick="Editar(this)">Editar</button> <button type="button" class="btn btn-danger" id="id-fila' + row + '" onclick="Borrarr(this)">Borrar</button><button type="button" class="btn btn-success" id="id-fila' + row + '" onclick="producto7UF1()">Producto 7UF</button><button type="button" class="btn btn-warning" id="id-fila' + row + '" onclick="renvioCorreo1()">Renvio de correo</button>';

}


//la funcion "exportar()" crea un archivo .xls con los datos de la tabla "datosFormularios"
//antes de exportar aparece una alerta de confidencialidad de los datos
//si se pulsa "cancelar" no se exporta nada
//si se pulsa "aceptar" se exporta el archivo bajo el nombre "datosFormularios+(fecha+hora(hh:mm)).xls"
//en el archivo .xls se colocan los encabezados de las columnas de la tabla
//se omite la ultima columna de la tabla que es la de los botones
function exportar() {
    var table = document.getElementById("datosFormularios");
    var row = table.rows.length;
    var cell = table.rows[row-1].cells;
    var fecha = new Date();
    var hora = fecha.getHours()+":"+fecha.getMinutes();
    var fecha = fecha.toLocaleDateString();
    var nombreArchivo = "datosFormularios "+fecha+" "+hora+".xls";
    var encabezados = [];
    var datos = [];
    var datosFinales = [];
    var r = confirm("Los datos que se exportaran son confidenciales, ¿Desea continuar?");
    if (r == true) {
        for (var i = 0; i < cell.length-1; i++) {
            encabezados.push(cell[i].innerHTML);
        }
        for (var i = 0; i < row-1; i++) {
            var cell = table.rows[i].cells;
            for (var j = 0; j < cell.length-1; j++) {
                datos.push(cell[j].innerHTML);
            }
            datosFinales.push(datos);
            datos = [];
        }
        var link = document.createElement("a");
        link.download = nombreArchivo;
        var csv = encabezados.join("\t") + "\n";
        for (var i = 0; i < datosFinales.length; i++) {
            csv += datosFinales[i].join("\t") + "\n";
        }
        var blob = new Blob([csv], {type: "text/csv"});
        link.href = window.URL.createObjectURL(blob);
        link.click();
    }
}

//funcion copiar-copiar7uf() copia los datos de la seccion name="producto-7uf"
// en el porta papeles
//al copiar los datos se le agrega un espacio al final para que no se peguen los datos
// ademas crea una alerta que dura 1 segundo para indicar que se copio el dato
function copiar7uf() {
    var input = document.getElementById("producto-7uf");
    input.select();
    document.execCommand("copy");
    alert("Copiado");
    setTimeout(function () { alert("Copiado"); }, 1000);
}

//funcion copiar-copiarRenvio() copia los datos de la seccion name="renvio-correo"
// en el porta papeles
//al copiar los datos se le agrega un espacio al final para que no se peguen los datos
// ademas crea una alerta que dura 1 segundo para indicar que se copio el dato
function copiarRenvio() {
    var input = document.getElementById("renvio-correo");
    input.select();
    document.execCommand("copy");
    alert("Copiado");
    setTimeout(function () { alert("Copiado"); }, 1000);
}

//crea la funcion "buscar()" que busca un dato en la tabla "datosFormularios" en 2 pasos
//1. busca el dato en la columna "codigoComercio" y si lo encuentra lo selecciona
//2. si no lo encuentra busca el dato en la columna "rut" y si lo encuentra lo selecciona
//si no encuentra el dato en ninguna de las columnas muestra una alerta
//cuando encuentra el dato selecciona la fila y la pone de color verde
//despues de 2 minutos la fila vuelve a su color original
function buscarDatos() {
    var table = document.getElementById("datosFormularios");
    var row = table.rows.length;
    var cell = table.rows[row-1].cells;
    var dato = document.getElementById("buscar-dato").value;
    var encontrado = false;
    for (var i = 0; i < row-1; i++) {
        var cell = table.rows[i].cells;
        if (cell[0].innerHTML == dato) {
            table.rows[i].style.backgroundColor = "green";
            encontrado = true;
            setTimeout(function () { table.rows[i].style.backgroundColor = "white"; }, 120000);
        } else if (cell[1].innerHTML == dato) {
            table.rows[i].style.backgroundColor = "green";
            encontrado = true;
            setTimeout(function () { table.rows[i].style.backgroundColor = "white"; }, 120000);
        }
    }
    if (encontrado == false) {
        alert("No se encontro el dato");
    }
}

//crea la funcion guarDatosR() que guarda los datos de la seccion "renvio-correo"
//guarda estos datos en localStorage bajo  un identificador
//para despues poder recuperarlos
//la manera de encontar estos datos esta determinada por el rut del comercio "for="rut""
//si el rut no esta en localStorage crea un nuevo identificador con el rut
//si el rut ya esta en localStorage agrega los datos al final del identificador
//los datos que se deven guardar son los siguientes:
//name="codigoComercio", name="nombreFantasia", name="rutComercio", name="correoElectronico", name="observaciones", name="motivo".
//aqui el codigo 
function guarDatosR() {
    var codigoComercio = document.getElementById("codigoComercio").value;
    var nombreFantasia = document.getElementById("nombreFantasia").value;
    var rutComercio = document.getElementById("rutComercio").value;
    var correoElectronico = document.getElementById("correoElectronico").value;
    var observaciones = document.getElementById("observaciones").value;
    var motivo = document.getElementById("motivo").value;
    var datos = codigoComercio + " " + nombreFantasia + " " + rutComercio + " " + correoElectronico + " " + observaciones + " " + motivo;
    var rut = document.getElementById("rut").value;
    if (localStorage.getItem(rut) == null) {
        localStorage.setItem(rut, datos);
    } else {
        localStorage.setItem(rut, localStorage.getItem(rut) + " " + datos);
    }
}

//crea la funcion "desabilitarAgregar1()"
//desabilita el boton id="agregar1"
//aqui el codigo
function desabilitarAgregar1() {
    document.getElementById("agregar1").disabled = true;
}

//crea la funcion "habilitarAgregar1()"
//desabilita el boton id="agregar1"
//aqui el codigo
function habilitarAgregar1() {
    document.getElementById("agregar1").disabled = false;
}

//crea la funcion guarDatos7UF() que guarda los datos de la seccion "producto-7uf"
//guarda estos datos en localStorage bajo un identificador para despues poder recuperarlos
//la manera de encontar estos datos esta determinada por el rut del comercio "for="rut""
//si el rut no esta en localStorage crea un nuevo identificador con el rut
//si el rut ya esta en localStorage agrega los datos al final del identificador
//los datos que se deven guardar son los siguientes:
//id="nombreFantasia", id="codigoComercio", id="numeroSibel", id="url", id="carritoCompra", id="paltaforma", id="nombreComercial", id="telefonoComercial", id="correoComercial", id="nombreTecnico", id="telefonoTecnico", id="correoTecnico".
//la separacion entre los datos es un "/"
//guarda los datos en json
//aqui el codigo
function guarDatos7UF() {
    var nombreFantasia = document.getElementById("nombreFantasia").value;
    var codigoComercio = document.getElementById("codigoComercio").value;
    var numeroSibel = document.getElementById("numeroSibel").value;
    var url = document.getElementById("url").value;
    var carritoCompra = document.getElementById("carritoCompra").value;
    var paltaforma = document.getElementById("paltaforma").value;
    var nombreComercial = document.getElementById("nombreComercial").value;
    var telefonoComercial = document.getElementById("telefonoComercial").value;
    var correoComercial = document.getElementById("correoComercial").value;
    var nombreTecnico = document.getElementById("nombreTecnico").value;
    var telefonoTecnico = document.getElementById("telefonoTecnico").value;
    var correoTecnico = document.getElementById("correoTecnico").value;
    var datos = nombreFantasia + "/" + codigoComercio + "/" + numeroSibel + "/" + url + "/" + carritoCompra + "/" + paltaforma + "/" + nombreComercial + "/" + telefonoComercial + "/" + correoComercial + "/" + nombreTecnico + "/" + telefonoTecnico + "/" + correoTecnico;
    var rut = document.getElementById("rut").value;
    var datosJson = JSON.stringify(datos);
    if (localStorage.getItem(rut) == null) {
        localStorage.setItem(rut, datosJson);
    } else {
        localStorage
            .setItem(rut, localStorage.getItem(rut) + " " + datosJson);
    }
}




//crea "mostrarDatos7UF()"
//muestra los datos guardados en localStorage
//compara el rut del comercio con el rut guardado en localStorage
//si el rut del comercio es igual al rut guardado en localStorage muestra los datos guardados en localStorage
//los datos son mostrado en los siguientes campos, en value="" y  en readonly="":
//id="nombreFantasia7uf", id="numeroSibel7uf", id="carrito7uf", id="codigoComercio7uf", id="url7uf", id="paltaforma7uf", id="nombreComercial7uf", id="telefonoComercial7uf", id="correoComercial7uf", id="nombreTecnico7uf", id="telefonoTecnico7uf", id="correoTecnico7uf".
//si no encuentra el rut del comercio en localStorage muestra una alerta: "No se encontro el dato"
//separacion entre los datos es un "/"
//aqui el codigo
function mostrarDatos7UF() {
    var rut = document.getElementById("rut").value;
    var datos = localStorage.getItem(rut);
    if (datos == null) {
        alert("No se encontro el dato");
    } else {
        var datosJson = JSON.parse(datos);
        var datosArray = datosJson.split(" ");
        for (var i = 0; i < datosArray.length; i++) {
            var datosArray2 = datosArray[i].split("/");
            document.getElementById("nombreFantasia7uf").value = datosArray2[0];
            document.getElementById("nombreFantasia7uf").readOnly = true;
            document.getElementById("numeroSibel7uf").value = datosArray2[2];
            document.getElementById("numeroSibel7uf").readOnly = true;
            document.getElementById("carrito7uf").value = datosArray2[4];
            document.getElementById("carrito7uf").readOnly = true;
            document.getElementById("codigoComercio7uf").value = datosArray2[1];
            document.getElementById("codigoComercio7uf").readOnly = true;
            document.getElementById("url7uf").value = datosArray2[3];
            document.getElementById("url7uf").readOnly = true;
            document.getElementById("paltaforma7uf").value = datosArray2[5];
            document.getElementById("paltaforma7uf").readOnly = true;
            document.getElementById("nombreComercial7uf").value = datosArray2[6];
            document.getElementById("nombreComercial7uf").readOnly = true;
            document.getElementById("telefonoComercial7uf").value = datosArray2[7];
            document.getElementById("telefonoComercial7uf").readOnly = true;
            document.getElementById("correoComercial7uf").value = datosArray2[8];
            document.getElementById("correoComercial7uf").readOnly = true;
            document.getElementById("nombreTecnico7uf").value = datosArray2[9];
            document.getElementById("nombreTecnico7uf").readOnly = true;
            document.getElementById("telefonoTecnico7uf").value = datosArray2[10];
            document.getElementById("telefonoTecnico7uf").readOnly = true;
            document.getElementById("correoTecnico7uf").value = datosArray2[11];
            document.getElementById("correoTecnico7uf").readOnly = true;
        }
    }
}


//crea "mostrarDatos7UF2()"
//muestra los datos guardados en localStorage
//compara el rut del comercio desde la celda donde fue pulsado el boton
//si el rut del comercio es igual al rut guardado en localStorage muestra los datos guardados en localStorage
//los datos son mostrado en los siguientes campos, en value="":
//id="nombreFantasia7uf", id="numeroSibel7uf", id="carrito7uf", id="codigoComercio7uf", id="url7uf", id="paltaforma7uf", id="nombreComercial7uf", id="telefonoComercial7uf", id="correoComercial7uf", id="nombreTecnico7uf", id="telefonoTecnico7uf", id="correoTecnico7uf".
//si no encuentra el rut del comercio en localStorage muestra una alerta: "No se encontro el dato"
//separacion entre los datos es un "/"
//aqui el codigo

//crea la funcion "darckMode()"
//cambia los colores de la pagina a modo oscuro
//al pulsarlo de nuevo vuelve a los colores originales
// aca el codigo
function darckMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

