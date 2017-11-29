///<reference path="clases/Empleado.ts"/>
///<reference path="clases/Persona.ts"/>
///<reference path="node_modules/@types/jquery/index.d.ts"/>
var md;
var bannerImage;
var imgData;
$(function () {
    MostrarGrilla();
    var btnAgregar = $("#btnAgregar"); //document.getElementByIdmismos selectors que css . o #
    btnAgregar.click(agregar);
    Limpiar();
    localStorage.clear();
    MostrarGrilla();
    //Variables de la imagen
    /*bannerImage = document.getElementById('bannerImg');
    let imgData = getImgBase64(bannerImage);
   localStorage.setItem("imgData", imgData);*/
    var btnFiltro = $("#btnFiltrar"); //document.getElementByIdmismos selectors que css . o #
    btnFiltro.click(filtrar);
    var chID = $("#chId");
    chID.click(filtrar);
    var chNombre = $("#chNombre");
    chNombre.click(filtrar);
    var chEdad = $("#chEdad");
    chEdad.click(filtrar);
    var chFoto = $("#chFoto");
    chFoto.click(filtrar);
});
function filtrar() {
    var MascLS = localStorage.getItem("Empleado");
    var aux = MascLS == null ? [] : JSON.parse(MascLS);
    var tipoFiltrado = Number($("#cmbFiltro").val());
    if (tipoFiltrado != 6) {
        var EmpleadosFiltradas = [];
        //Filtro Tipo de Empleado
        EmpleadosFiltradas = aux.filter(function (Empleado) {
            return Personas.eTipoEmpleado[Empleado.tipo] === Personas.eTipoEmpleado[tipoFiltrado];
        });
        //Premomedio del tipo Filtrado
        //Premomedio del tipo Filtrado
        var promedioEmpleadosFiltradas = promedioEmpleados(EmpleadosFiltradas);
        $("#txtProm").val(promedioEmpleadosFiltradas);
        MostrarGrillaFiltrada(EmpleadosFiltradas);
    }
    else {
        var promedioTodos = promedioEmpleados(aux);
        $("#txtProm").val(promedioTodos);
        MostrarGrillaFiltrada(aux);
    }
}
function promedioEmpleados(EmpleadosFiltradas) {
    var suma = EmpleadosFiltradas.reduce(function (previo, actual) {
        return previo + actual.edad;
    }, 0);
    var cantidad = EmpleadosFiltradas.reduce(function (actual, siguente) {
        return actual + 1;
    }, 0);
    var promedio = (suma / cantidad).toFixed(2);
    return promedio;
}
function ultimoID(EmpleadosFiltradas) {
    var cantidad = EmpleadosFiltradas.reduce(function (actual, siguente) {
        return siguente.id;
    }, 0);
    return cantidad;
}
function MostrarGrillaFiltrada(EmpleadosFiltradas) {
    var chID = $("#chId");
    var chNombre = $("#chNombre");
    var chEdad = $("#chEdad");
    var chFoto = $("chFoto");
    var auxID;
    var auxNombre;
    var auxEdad;
    var auxFoto;
    //ID
    if (chID.is(':checked')) {
        auxID = "<th> ID</th>";
    }
    else {
        auxID = "";
    }
    //Nombre
    if (chNombre.is(':checked')) {
        auxNombre = "<th>Nombre</th>";
    }
    else {
        auxNombre = "";
    }
    //EDad
    if (chEdad.is(':checked')) {
        auxEdad = "<th> Edad</th>";
    }
    else {
        auxEdad = "";
    }
    //Patas
    if (chFoto.is(':checked')) {
        auxFoto = "<th> Patas</th>";
    }
    else {
        auxFoto = "";
    }
    //hacer aparte
    var tCuerpo = $("#tCuerpo");
    var tabla = $("#tabla");
    tabla.html("");
    tCuerpo.html("");
    tabla.append("<tr class='success'>" +
        auxID +
        auxNombre +
        auxEdad +
        "<th> Tipo</th>" +
        auxFoto +
        "<th> Accion</th>" +
        "</tr>");
    for (var index = 0; index < EmpleadosFiltradas.length; index++) {
        //ID
        if (chID.is(':checked')) {
            auxID = "<td> " + EmpleadosFiltradas[index].id + "</td>";
        }
        else {
            auxID = "";
        }
        if (chNombre.is(':checked')) {
            auxNombre = "<td>" + EmpleadosFiltradas[index].nombre + "</td>";
        }
        else {
            auxNombre = "";
        }
        //EDad
        if (chEdad.is(':checked')) {
            auxEdad = "<td>" + EmpleadosFiltradas[index].edad + "</td>";
        }
        else {
            auxEdad = "";
        }
        //Patas
        if (chFoto.is(':checked')) {
            auxFoto = "<td>" + EmpleadosFiltradas[index].foto + "</td>";
        }
        else {
            auxFoto = "";
        }
        //append agrega mas al html
        tCuerpo.append("<tr>" +
            auxID +
            auxNombre +
            auxEdad +
            ("<td>" + Personas.eTipoEmpleado[EmpleadosFiltradas[index].tipo] + "</td>") +
            auxFoto +
            ("<td><button id=btnEliminar class=\"btn btn-danger\" onclick=eliminar(" + index + ")>Borrar</button>\n             <input id=btnModificar type=button class=\"btn btn-warning\" value=Modificar onclick=Modificar(" + EmpleadosFiltradas[index].id + ")></td>\n                    </tr>"));
    }
}
function agregar() {
    var idEmpleado = Number($("#txtID").val());
    var tipoEmpleado = Number($("#cmbTipo").val());
    var nombreEmpleado = String($("#txtnombre").val());
    var edadEmpleado = Number($("#txtedad").val());
    var fotoEmpleado = String($("#txtFoto").val());
    //  fotoEmpleado = localStorage.getItem('imgData');
    //bannerImg = document.getElementById('tableBanner');
    //bannerImg.src = "data:image/png;base64," + dataImage;
    /* if (idEmpleado <= 0) {
         //document.getElementById("nombre").className = "error";
         $("#txtID").addClass("error");
         alert("Debe ingresar un ID mayor a 0");
         return;
     } */
    if (nombreEmpleado == "") {
        //document.getElementById("apellido").className = "error";
        $("#txtnombre").addClass("error");
        alert("Debe ingresar un Nombre");
        return;
    }
    if (edadEmpleado <= 0) {
        //document.getElementById("nombre").className = "error";
        $("#txtedad").addClass("error");
        alert("Debe ingresar una edad mayor a 0");
        return;
    }
    if (fotoEmpleado = "") {
        //document.getElementById("nombre").className = "error";
        $("#txtPatas").addClass("error");
        alert("Debe ingresar una Foto");
        return;
    }
    else {
        if (confirm("Esta seguro de agregar Persona?")) {
            // $("#txtID").addClass("sinError");
            $("#txtnombre").addClass("sinError");
            $("#txtedad").addClass("sinError");
            $("#txtFoto").addClass("sinError");
            var objetoEmpleado = new Personas.Empleado(idEmpleado, tipoEmpleado, nombreEmpleado, edadEmpleado, fotoEmpleado);
            AgregarEmpleado(objetoEmpleado);
        }
    }
}
function getImgBase64(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
function readURL(input) {
    document.getElementById("bannerImg").style.display = "block";
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('bannerImg').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}
function AgregarEmpleado(nuevaEmpleado) {
    var EmpleadoString = localStorage.getItem("Empleado");
    var arrayEmpleados;
    if (EmpleadoString == null) {
        arrayEmpleados = [];
    }
    else {
        arrayEmpleados = JSON.parse(EmpleadoString);
    }
    arrayEmpleados.push(nuevaEmpleado);
    localStorage.setItem("Empleado", JSON.stringify(arrayEmpleados));
    MostrarGrilla();
    Limpiar();
}
function MostrarGrilla() {
    var EmpleadosLS = localStorage.getItem("Empleado");
    var masAux = EmpleadosLS == null ? [] : JSON.parse(EmpleadosLS);
    var idEmpleado = Number($("#txtID").val(ultimoID(masAux) + 1));
    var tCuerpo = $("#tCuerpo");
    var tabla = $("#tabla");
    tabla.html("");
    tCuerpo.html("");
    tabla.append("<tr class='succes'>" +
        "<th>ID</th>" +
        " <th>Nombre</th>" +
        " <th>Edad</th>" +
        "<th>Tipo</th>" +
        "<th>Foto</th>" +
        "<th>Accion</th>" +
        " </tr>");
    //loading.html("");
    for (var index = 0; index < masAux.length; index++) {
        tCuerpo.append(" <tr>\n                    <td>" + masAux[index].id + "</td>\n                    <td>" + masAux[index].nombre + "</td>\n                    <td> " + masAux[index].edad + "</td>\n                    <td>" + Personas.eTipoEmpleado[masAux[index].tipo] + "</td>\n                    <td>" + masAux[index].foto + "</td>\n                    <td><button  id=btnBorrar class=\"btn btn-danger\" onclick=eliminar(" + index + ")>Borrar</button>\n                    <button  id=btnModificar class=\"btn btn-warning\" onclick=Modificar(" + masAux[index].id + ")>Modificar</button></td>\n                    </tr> \n                    ");
    }
}
function eliminar(index) {
    var EmpleadoLS = localStorage.getItem("Empleado");
    var aux = EmpleadoLS == null ? [] : JSON.parse(EmpleadoLS);
    aux.splice(index, 1);
    localStorage.setItem("Empleado", JSON.stringify(aux));
    MostrarGrilla();
    alert("La Empleado ha sido eliminada");
}
function Limpiar() {
    $('#txtID').val('');
    $('#cmbTipo').val('');
    $('#txtnombre').val('');
    $('#txtedad').val('');
    $('#txtFoto').val('');
}
//function Eliminar(id) {
//    TraerEmpleados();
//  EmpleadosArray.splice(id, 1);
//localStorage.setItem("Empleados", JSON.stringify(EmpleadosArray));
//TraerEmpleados()
function Modificar(id) {
    var EmpleadoLS = localStorage.getItem("Empleado");
    var aux = EmpleadoLS == null ? [] : JSON.parse(EmpleadoLS);
    var ModificarMas;
    for (var index = 0; index < aux.length; index++) {
        if (aux[index].id == id) {
            ModificarMas = aux[index];
        }
    }
    var idEmpleado = Number($("#txtID").val(ModificarMas.id));
    var tipoEmpleado = Number($("#cmbTipo").val(ModificarMas.tipo));
    var nombreEmpleado = String($("#txtnombre").val(ModificarMas.nombre));
    var edadEmpleado = Number($("#txtedad").val(ModificarMas.edad));
    var fotoEmpleado = Number($("#txtFoto").val(ModificarMas.cantPatas));
    var btnAgregar = $("#btnAgregar");
    btnAgregar.attr("value", "Modificar");
    btnAgregar.off("click", agregar);
    btnAgregar.on("click", md = function () {
        ModificarEmpleado(ModificarMas);
    });
}
function ModificarEmpleado(masAux) {
    var MascLS = localStorage.getItem("Empleado");
    var aux = MascLS == null ? [] : JSON.parse(MascLS);
    for (var index = 0; index < aux.length; index++) {
        if (aux[index].id == masAux.id) {
            console.log(aux[index]);
            aux[index].tipo = Number($("#cmbTipo").val());
            aux[index].nombre = String($("#txtnombre").val());
            aux[index].edad = Number($("#txtedad").val());
            aux[index].foto = String($("#txtFoto").val());
            console.log(aux[index]);
            break;
        }
    }
    var btnAgregar = $("#btnAgregar");
    btnAgregar.attr("value", "Agregar");
    btnAgregar.off("click", md);
    btnAgregar.on("click", agregar);
    localStorage.setItem("Empleado", JSON.stringify(aux));
    Limpiar();
    MostrarGrilla();
}
