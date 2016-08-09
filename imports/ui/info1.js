/*import '../lib/bootstrap-slider.min.css';
import '../lib/bootstrap-slider.min.js';*/
import './info1.html';
import './info2.js';

Template.info1.onRendered(function() { 
	$("#sl-preco").slider({
		tooltip: 'always'
	}); 
	//console.log("slider ativado");
});

Template.info1.events({
    'click #btn-next-1': function(event) {
        event.preventDefault();

        Session.set("idade", $("#inp-idade").val());
        Session.set("genero", $('input[name=sexo]:checked', '#rd-genero').val())
        Session.set("preco-max", $("#sl-preco").val());

        FlowRouter.go("/info2");
    }
});



        /*
        console.log("Idade: " + $("#idade").val());
        Session.set("idade",$("#idade").val());
        console.log("Idade Session: " + Session.get("idade"));

        FlowRouter.go("/perguntas");*/