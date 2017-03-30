var info = {

	"Prenom" : "",
	"Nom" : "",
	"Age" : 0
};


//$("#annuaire").text(function(personne){


//});

$( document ).ready(function() {

	var prenom = "";
	var nom = ""; 
	var age = "";

	$("#Prenom").keyup(function(){
		prenom = $("#Prenom").val();

	});


	$("#Nom").keyup(function(){
		nom = $("#Nom").val();

	});	


	$("#Age").keyup(function(){
		age = $("#Age").val();
	

	});	

	$("#button").click(function(){
	   
	   //console.log(prenom);
	   //console.log(nom);
	   //console.log(personne);
	   var personne = {"Prenom" : prenom, "Nom" : nom, "Age" : age}
		$("#table").append( $('<tr><td>'+prenom+'</td><td>'+nom+'</td><td>'+age+'</td></tr>'));
		$("input").val("");

	});

 });
 

