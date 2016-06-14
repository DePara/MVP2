import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';


FlowRouter.route('/', {
    name: 'landing',
    action() {
    	//console.log("passei em router/")
        if (!Meteor.user()){
            BlazeLayout.render('app', {main: 'landing'});
        } else {
            BlazeLayout.render('app', {main: 'dashboard'});
        }
    	//console.log("passei de novo")
    }
});


FlowRouter.route('/registro', {
    name: 'registro',
    action() {
        //console.log("passei em router/registro");
        if (!Meteor.user())
            BlazeLayout.render('app', { main: 'regform' });
        else
            FlowRouter.go("/");
        //console.log("passei de novo");
    }
});

FlowRouter.route('/info', {
    name: 'info',
    action() {
        //console.log("passei em router/registro");
        if (Meteor.user())
            BlazeLayout.render('app', { main: 'info' });
        else {
            BlazeLayout.render('app', { main: 'landing' });
            FlowRouter.go("/");
        }
        //console.log("passei de novo");
    }
});

