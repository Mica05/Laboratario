///<reference path="clases/Empleado.ts"/>
///<reference path="clases/Persona.ts"/>
///<reference path="node_modules/@types/jquery/index.d.ts"/>

let md: any;
  let bannerImage;
  let imgData:any;
$(function () {
    
    MostrarGrilla();
    let btnAgregar = $("#btnAgregar")//document.getElementByIdmismos selectors que css . o #
    btnAgregar.click(agregar)
    
 
     Limpiar();
     
    localStorage.clear();
        MostrarGrilla();
        //Variables de la imagen
 /*bannerImage = document.getElementById('bannerImg');
 let imgData = getImgBase64(bannerImage);
localStorage.setItem("imgData", imgData);*/


        let btnFiltro = $("#btnFiltrar")//document.getElementByIdmismos selectors que css . o #
    btnFiltro.click(filtrar)

    let chID = $("#chId")
    chID.click(filtrar);

    let chNombre = $("#chNombre")
    chNombre.click(filtrar);

    let chEdad = $("#chEdad")
    chEdad.click(filtrar);

    let chFoto = $("#chFoto")
    chFoto.click(filtrar);
});

   

function filtrar() {
   
    
 let MascLS: string | null = localStorage.getItem("Empleado");
    let aux: Personas.Empleado[] = MascLS == null ? [] : JSON.parse(MascLS);
    let tipoFiltrado = Number($("#cmbFiltro").val());

    
  if (tipoFiltrado != 6) {
        let EmpleadosFiltradas = [];
        //Filtro Tipo de Empleado
        EmpleadosFiltradas = aux.filter(function (Empleado: Personas.Empleado) {

      return Personas.eTipoEmpleado[Empleado.tipo] === Personas.eTipoEmpleado[tipoFiltrado];
           
        });
        //Premomedio del tipo Filtrado
         //Premomedio del tipo Filtrado
       
        let promedioEmpleadosFiltradas = promedioEmpleados(EmpleadosFiltradas);
        $("#txtProm").val(promedioEmpleadosFiltradas);
        MostrarGrillaFiltrada(EmpleadosFiltradas);

    }
    else {

        let promedioTodos = promedioEmpleados(aux);
        $("#txtProm").val(promedioTodos);
        MostrarGrillaFiltrada(aux);
 
}
}
function promedioEmpleados(EmpleadosFiltradas: Personas.Empleado[]) {
    let suma = EmpleadosFiltradas.reduce(function (previo, actual) {
        return previo + actual.edad;
    }, 0);
    let cantidad = EmpleadosFiltradas.reduce(function (actual, siguente) {
        return actual + 1
    }, 0);
    let promedio = (suma / cantidad).toFixed(2);
    return promedio;
}

function ultimoID(EmpleadosFiltradas:Personas.Empleado[]) {
    let cantidad = EmpleadosFiltradas.reduce(function (actual, siguente) {
        return siguente.id;
    }, 0);
    return cantidad;
}

function MostrarGrillaFiltrada(EmpleadosFiltradas: Personas.Empleado[]) {
    let chID = $("#chId");
    let chNombre = $("#chNombre");
    let chEdad = $("#chEdad");
    let chFoto = $("chFoto");

    let auxID: string;
    let auxNombre: string;
    let auxEdad: string;
    let auxFoto: string;


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
    let tCuerpo = $("#tCuerpo");
   let tabla = $("#tabla");
   tabla.html("");
    tCuerpo.html("");

    tabla.append("<tr class='success'>" +
        auxID +
        auxNombre +
        auxEdad +
        "<th> Tipo</th>" +
        auxFoto +
        "<th> Accion</th>" +
        "</tr>"
    );
    for (var index = 0; index < EmpleadosFiltradas.length; index++) {
        //ID
        if (chID.is(':checked')) {
            auxID = `<td> ${EmpleadosFiltradas[index].id}</td>`;
        }
        else {
            auxID = "";
        }
        if (chNombre.is(':checked')) {
            auxNombre = `<td>${EmpleadosFiltradas[index].nombre}</td>`;
        }
        else {
            auxNombre = "";
        }
        //EDad
        if (chEdad.is(':checked')) {
            auxEdad = `<td>${EmpleadosFiltradas[index].edad}</td>`;
        }
        else {
            auxEdad = "";
        }
        //Patas
        if (chFoto.is(':checked')) {
            auxFoto = `<td>${EmpleadosFiltradas[index].foto}</td>`;
        }
        else {
            auxFoto = "";
        }
        //append agrega mas al html
        tCuerpo.append(
            "<tr>" +
            auxID +
            auxNombre +
            auxEdad +
            `<td>${ Personas.eTipoEmpleado[EmpleadosFiltradas[index].tipo]}</td>` +
            auxFoto +
            `<td><button id=btnEliminar class="btn btn-danger" onclick=eliminar(${index})>Borrar</button>
             <input id=btnModificar type=button class="btn btn-warning" value=Modificar onclick=Modificar(${EmpleadosFiltradas[index].id})></td>
                    </tr>`
        );
    }
}
function agregar() {
   

    let idEmpleado:number = Number($("#txtID").val());
    let tipoEmpleado:Personas.eTipoEmpleado = Number($("#cmbTipo").val());
    let nombreEmpleado:string = String($("#txtnombre").val());
    let edadEmpleado:number = Number($("#txtedad").val());
    let fotoEmpleado:string = String($("#txtFoto").val());
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
    if (fotoEmpleado ="") {
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

            let objetoEmpleado: Personas.Empleado = new Personas.Empleado(idEmpleado, tipoEmpleado, nombreEmpleado, edadEmpleado,fotoEmpleado);
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
function readURL(input) 
{
    document.getElementById("bannerImg").style.display = "block";

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('bannerImg').src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}
function AgregarEmpleado(nuevaEmpleado: Personas.Empleado): void {

    let EmpleadoString: string | null = localStorage.getItem("Empleado");
    let arrayEmpleados;
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

    let EmpleadosLS: string | null = localStorage.getItem("Empleado");
    let masAux: Personas.Empleado[] = EmpleadosLS == null ? [] : JSON.parse(EmpleadosLS);
    let idEmpleado: number = Number($("#txtID").val(ultimoID(masAux) + 1));
   
 let tCuerpo=$("#tCuerpo");
 let tabla = $("#tabla");
 tabla.html("");
 tCuerpo.html("");

    tabla.append( 
   "<tr class='succes'>" +
   "<th>ID</th>"+
  " <th>Nombre</th>"+
  " <th>Edad</th>"+
   "<th>Tipo</th>"+
   "<th>Foto</th>"+
   "<th>Accion</th>"+
  " </tr>"
);
    //loading.html("");
    for (var index = 0; index < masAux.length; index++) {
        tCuerpo.append(
            ` <tr>
                    <td>${masAux[index].id}</td>
                    <td>${masAux[index].nombre}</td>
                    <td> ${masAux[index].edad}</td>
                    <td>${Personas.eTipoEmpleado[masAux[index].tipo]}</td>
                    <td>${masAux[index].foto}</td>
                    <td><button  id=btnBorrar class="btn btn-danger" onclick=eliminar(${index})>Borrar</button>
                    <button  id=btnModificar class="btn btn-warning" onclick=Modificar(${masAux[index].id})>Modificar</button></td>
                    </tr> 
                    `);
    }
}


function eliminar(index: number) {
 let EmpleadoLS:string | null=  localStorage.getItem("Empleado");
 let aux: Personas.Empleado[]= EmpleadoLS== null ?[]: JSON.parse(EmpleadoLS);
aux.splice(index,1);
localStorage.setItem("Empleado",JSON.stringify(aux));
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
function Modificar(id:number)

{
    let EmpleadoLS:string | null= localStorage.getItem("Empleado");
    let aux: Personas.Empleado[]= EmpleadoLS== null?[]: JSON.parse(EmpleadoLS);
    let ModificarMas: any;
    for( let index=0; index< aux.length;index++)
        {
           if(aux[index].id==id)
            {
                ModificarMas=aux[index];
            } 
        }
    let idEmpleado:number=  Number($("#txtID").val(ModificarMas.id));
    let tipoEmpleado:Personas.eTipoEmpleado= Number($("#cmbTipo").val(ModificarMas.tipo));
    let nombreEmpleado:string = String($("#txtnombre").val(ModificarMas.nombre));
    let edadEmpleado:number = Number($("#txtedad").val(ModificarMas.edad));
    let fotoEmpleado:number = Number($("#txtFoto").val(ModificarMas.cantPatas));
  
    let btnAgregar = $("#btnAgregar")
    btnAgregar.attr("value", "Modificar");
    btnAgregar.off("click", agregar);
    btnAgregar.on("click",md =function () {
            ModificarEmpleado(ModificarMas) 
            });
}
        function ModificarEmpleado(masAux:Personas.Empleado)
        {
  let MascLS: string | null = localStorage.getItem("Empleado");
    let aux: Personas.Empleado[] = MascLS == null ? [] : JSON.parse(MascLS);

    for (let index = 0; index < aux.length; index++) {
        if (aux[index].id == masAux.id) {
            console.log(aux[index]);
            aux[index].tipo= Number($("#cmbTipo").val());
            aux[index].nombre = String($("#txtnombre").val());
            aux[index].edad = Number($("#txtedad").val());
            aux[index].foto = String($("#txtFoto").val());
            console.log(aux[index]);
            break;
        }
        
    }
    
    let btnAgregar = $("#btnAgregar")
    btnAgregar.attr("value", "Agregar");
    btnAgregar.off("click", md );
    btnAgregar.on("click", agregar);
    localStorage.setItem("Empleado", JSON.stringify(aux));
    Limpiar();
    MostrarGrilla();
    
}
