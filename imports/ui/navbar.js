import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './navbar.html';
import '../../client/main.js';


Template.navbar.events({
    'click .logout': function(event) {
        event.preventDefault();
        Meteor.logout();
        BlazeLayout.render('app', { main: 'landing' });  
    }
});