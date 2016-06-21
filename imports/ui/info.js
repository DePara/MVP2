/*import '../lib/bootstrap-slider.min.css';
import '../lib/bootstrap-slider.min.js';*/
import './info.html';
import './perguntas.js';

Template.info.onRendered(function() { 
	$("#preco").slider({
		tooltip: 'always'
	}); 
	console.log("slider ativado");
});

Template.info.events({
    'click #btn-next-1': function(event) {
        event.preventDefault();
        FlowRouter.go("/perguntas");
    }
});