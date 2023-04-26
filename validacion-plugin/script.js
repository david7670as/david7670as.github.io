//Funcion: guardar y descargar los datos
function guardarDatos() {
    //obtengo los datos del formulario
    var codigoComercio = document.getElementById("codigo-comercio").value;
    var rutComercio = document.getElementById("rut-comercio").value;
    var rutComercioinfo = document.getElementById("rut-comercio-infromado").value;
    var nombreecomer = document.getElementById("Nombre-comercio").value;
    var urlIntegracion = document.getElementById("url-integracion").value;
    var urlProduccion = document.getElementById("url-produccion").value;
    var nombreTec = document.getElementById("nombre-tec").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var plugin = document.getElementById("Tipo").value;
    var producto = document.getElementById("producto").value;
    var comentarios = document.getElementById("comentario").value;
    
    //obtener fecha actual
    var FechaActual = new Date();
  
    //obtengo el logotipo
    var logotipo = document.getElementById("logotipo-imagen").files[0]; //obtengo el logotipo, (var) = variable, ( )
  
    //obtengo los PDF
    var pdf1 = document.getElementById("correo-evidencia");
    var pdf2 = document.getElementById("correo-apikey");
  
    //obtengo la apikey
    var apikey = document.getElementById("apikey").value;
  
    //OBJETO .ZIP
    var zip = new JSZip()
  
    //crea el .txt validacion y agrega los datos del fromulario
    var contenidoArchivoValidacion =  "-Nombre de comercio: " + nombreecomer + "\n" + 
                                      "-Codigo comercio: " + codigoComercio + "\n" + 
                                      "-Rut del comercio: " + rutComercio + "\n" +
                                      "-Rut del comercio informado: " + rutComercioinfo + "\n" +
                                      "-Url de integracion: " + urlIntegracion + "\n" +
                                      "-url de produccion: " + urlProduccion + "\n" +
                                      "-Nombre tecnico: " + nombreTec + "\n" + 
                                      "-Correo electronico: " + email + "\n" +
                                      "-Telefono: " + telefono + "\n" +
                                      "-tipo: " + plugin + "\n" +
                                      "-producto: " + producto + "\n" +
                                      "-comentario: \n ►\t" + comentarios + "\n";
  
    //crea el .txt de apikey y agrega los datos del formulario
    var contenidoArchivoApikey = "Se a asignado el sigiente apikey: \n" +
                                 "►\t " + apikey + "\n" +
                                 "al codigo de comercio: \n" +
                                 "►\t " + codigoComercio + "\n";
  
    // formatear la fecha para que quede como "yyyy-mm-dd"
    var fechaFormateada = ("0" + FechaActual.getDate()).slice(-2) + "-" +
                          ("0" + (FechaActual.getMonth()+1)).slice(-2) + "-" +
                          FechaActual.getFullYear();
  
    //agregar al archivo .zip
    zip.file("validacion.txt", contenidoArchivoValidacion);
    zip.file("apikey.txt", contenidoArchivoApikey);
    zip.file(nombreecomer + " " + codigoComercio + " (correo de evidencia).pdf", pdf1.files[0]); //
    zip.file(nombreecomer + " " + codigoComercio + " (correo con apikey).pdf", pdf2.files[0]);
    zip.file(logotipo.name, logotipo, { base64: true });
  
    //formato de nombre archivo .zip
    var nombreArchivoZip = fechaFormateada + " - (" + codigoComercio + ") - "+ nombreecomer + " (Plugin).zip"; 
  
    //generar achivo .zip
    zip.generateAsync({type:"blob", nombreArchivoZip }) //"blob" es para descargar el archivo
       .then(function(content) {
        //descarga el archivo .zip con el nombre personalizado
        saveAs(content, nombreArchivoZip);
       });
  
  }
  
  //Funcion: limpiar formulario
  function clearfill() { 
    document.getElementById("codigo-comercio").value = " ";
    document.getElementById("rut-comercio").value = " ";
    document.getElementById("rut-comercio-infromado").value = " ";
    document.getElementById("Nombre-comercio").value = " ";
    document.getElementById("url-integracion").value = " ";
    document.getElementById("url-produccion").value = " ";
    document.getElementById("nombre-tec").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("telefono").value = " ";
    document.getElementById("Tipo").value = " ";
    document.getElementById("producto").value = " ";
    document.getElementById("comentario").value = " ";
    document.getElementById("apikey").value = " ";
    document.getElementById("logotipo-imagen").value = " ";
    document.getElementById("correo-evidencia").value = " ";
    document.getElementById("correo-apikey").value = " ";

  
  
  
  }