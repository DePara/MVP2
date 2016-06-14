/*import '../lib/bootstrap-slider.min.css';
import '../lib/bootstrap-slider.min.js';*/
import './info.html';

Template.info.onRendered(function() { 
	$("#preco").slider({
		tooltip: 'always'
	}); 
	console.log("slider ativado");
});