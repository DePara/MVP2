import { Template } from 'meteor/templating'

import './body.html';
import './body.css';

Template.landing.onRendered( function() {
	$('body').append('<script src="/effect.js"></script>');
});