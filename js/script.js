$(document).ready(function() {	
	quito = "#9b9b9b";
	pongo = "#006AA3";
	$("#tablero").addClass("tap-active");
	$("#tablero span").css("color", pongo);
	$("main").load("view/tablero.html");
	$("#empresa span").css("color", quito); //quito
	
	$("#tablero").click(function(){
		$("#empresa span").css("color", quito); //quito
		$("#formulario span").css("color", quito); //quito
		$("#tablero span").css("color", pongo); //pongo

		$(".tap").removeClass("tap-active");
		$(this).addClass("tap-active");
		$("main").load("view/tablero.html");
	});
	
	$("#formulario").click(function(){
		$("#empresa span").css("color", quito); //quito
		$("#tablero span").css("color", quito); //quito
		$("#formulario span").css("color", pongo); //pongo

		$(".tap").removeClass("tap-active");
		$(this).addClass("tap-active");
		$("main").load("view/formulario.html");
	});

	$("#empresa").click(function(){
		$("#tablero span").css("color", quito); //quito
		$("#empresa span").css("color", quito); //quito
		$("#formulario span").css("color", quito); //quito
		$("#empresa span").css("color", pongo); //pongo

		$(".tap").removeClass("tap-active");
		$(this).addClass("tap-active");
		$("main").load("view/empresa.html");
	});
});