import { Template } from 'meteor/templating'

import './body.html';

Template.landing.onRendered( function() {
	$('body').append('<script src="/effect.js"></script>');
});