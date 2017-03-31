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
	var Mail = "";
	var Tel = "";

	$("#Nom").keyup(function(){
		nom = $("#Nom").val();

	});	

	$("#Prenom").keyup(function(){
		prenom = $("#Prenom").val();

	});



	$("#Age").keyup(function(){
		age = $("#Age").val();
	

	});	

	$("#Mail").keyup(function(){
		mail = $("#Mail").val();
	

	});	

	$("#Tel").keyup(function(){
		tel = $("#Tel").val();
	

	});	

	$("#button").click(function(){
	   
	   //console.log(prenom);
	   //console.log(nom);
	   //console.log(personne);
		var personne = {"Nom" : nom, "Prenom" : prenom, "Age" : age, "Mail" : mail, "Tel" : tel}
		$("#table").append('<tr><td>'+nom+'</td><td>'+prenom+'</td><td>'+age+'</td><td>'+mail+'</td><td>'+ tel+'</td><td><button id="bsupp" class="btn btn-danger">Supprimer</button></td></tr>');
		$("input").val("");
		annuaire.push(personne);
		//console.log(annuaire);
		

	});

 });

$("#table").delegate("#bsupp", 'click', function(){
	
		$(this).parent().parent().remove();
		
		//console.log(annuaire);
		
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


	$("#table").delegate('thead', 'click', function(){
		
		$("#table").tablesorter().trigger("update");
    }); 
		
		