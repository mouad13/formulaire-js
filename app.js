var annuaire = [];

var info = {

	"Nom" : "",
	"Prenom" : "",
	"Age" : 0
};


$( document ).ready(function() {

	var nom = ""; 
	var prenom = "";
	var age = "";

	$("#Nom").keyup(function(){
		nom = $("#Nom").val();

	});	

	$("#Prenom").keyup(function(){
		prenom = $("#Prenom").val();

	});



	$("#Age").keyup(function(){
		age = $("#Age").val();
	

	});	

	$("#button").click(function(){
	   
	   //console.log(prenom);
	   //console.log(nom);
	   //console.log(personne);
		var personne = {"Nom" : nom, "Prenom" : prenom, "Age" : age}
		$("#table").append('<tr><td>'+nom+'</td><td>'+prenom+'</td><td>'+age+'</td><td><button id="bsupp">Supprimer</button></td></tr>');
		$("input").val("");
		annuaire.push(personne);
		//console.log(annuaire);

	});

 });

$("#table").delegate("#bsupp", 'click', function(){
	
		$(this).parent().parent().remove();
		
		//console.log(delet);
		
}); 


$(function() {

    var leFocus; 

    $('input').focus( function() {
      leFocus = '#' + $(this).attr('id');       
      $(leFocus).css('background-color', '#afc');
    });

    $('input').blur( function() {
      leFocus = '#' + $(this).attr('id');       
      $(leFocus).css('background-color', '#fff');
  	});
	  
	function efface_formulaire() {
	    $('form').find("textarea, :text, select").val("").end().find(":checked").prop("checked", false);
	}
		 
 });
