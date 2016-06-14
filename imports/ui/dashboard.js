import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './dashboard.html';
import './info.js';

Template.dashboard.events({
	'click #dashStart': function() {
		//window.location.href = "/info";
		FlowRouter.go('/info');
	}
});