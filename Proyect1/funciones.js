
indow.onload=function(){
    var rec=localStorage.getItem("datos");
    console.log(rec);
 }
 

 var texthtml="";
 function Postear()
 {
     
   var json= localStorage.getItem("datos");
     var titulo=$("#titulo").val();
     var header=$("#header").val();
     var post=$("#texto").val();
     var autor=$("#autor").val();
     var data={
             "title":titulo,
             "header":header,
             "posttext":post,
             "author":autor
         };
   $("#titulo").val('');
   $("#header").val('');
   $("#texto").val('');
   $("#autor").val('');
   $("#myModal").modal("hide");
   $("#txtpost").html("<img src='455.gif'>");
  $.post("http://localhost:1337/postearNuevaEntrada",JSON.stringify(data),function(respuesta)
     {
       console.log(json);
         console.log(respuesta);
       texthtml = texthtml + "<div class='col-xs-12 col-sm-8 col-md-9 col-lg-9 color1'><div class='row'><h1>" + respuesta.title +"</h1><h2>"+respuesta.header+"</h2><label type='text'>"+respuesta.posttext+"<br><label type='text'>"+respuesta.author+"<br><label type='text'>Fecha del post: "+respuesta.date+"</div></div>";
            $("#txtpost").html(texthtml);
            //document.getElementById("txtpost").innerHTML="<div class='col-xs-12 col-sm-8 col-md-9 col-lg-9 color1'><div class='row'><h1>" + respuesta.title +"</h1><h2>"+respuesta.header+"</h2><label type='text'>"+respuesta.posttext+"<br><label type='text'>"+respuesta.author+"<br><label type='text'>Fecha del post: "+respuesta.date+"</div></div>";
 
 
     });
 }