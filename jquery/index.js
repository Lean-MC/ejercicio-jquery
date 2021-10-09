/*act1*/

$(function(){

    $("#saludo1").click(function(){
        alert("Soy el genio de Aladdin, no soy Will Smith soy el gracioso,toca hide para esconder el texto y show para que reaparezca");

    });

});

$(function(){

    $("#hideb").click(function(){
        $("#hidep").hide();

    });

});

$(function(){

    $("#showb").click(function(){
        $("#hidep").show();

    });

});

/*act2*/

$(function(){

    $("#saludo2").click(function(){
        alert("Soy el mago oscuro, el mejor mago del anime saludos mortal, pasa el mouse sobre el parrafo del medio para mandarlo al reino de las Sombras");

    });

});

$(function(){

    $("#textod").mouseleave(function(){
        $("#textod").fadeOut();

    });

});

/*act3*/

$(function(){

    $("#saludo3").click(function(){
        alert("Soy el mago sin dientes, querian traer a Harry potter pero nos quedamos sin presupuesto, toca el boton para ver el mensaje oculto");

    });

});

$(function(){

    $("#mensaje").click(function(){
        $("#tercerp").text("Espero que te haya gustado,");

    });

});