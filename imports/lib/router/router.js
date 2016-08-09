import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';


FlowRouter.route('/', {
    name: 'landing',
    action() {
    	//console.log("passei em router/")
        if (!Meteor.user()){
            Meteor.logout();
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
        if (!Meteor.user()){
            //console.log("passei aqui no /registro");
            Meteor.logout();
            BlazeLayout.render('app', { main: 'regform' });
        } else {
            FlowRouter.go("/");
        }
        //console.log("passei de novo");
    }
});

FlowRouter.route('/info1', {
    name: 'info1',
    action() {
        //console.log("passei em router/info");
        if (Meteor.user())
            BlazeLayout.render('app', { main: 'info1' });
        else {
            Meteor.logout();
            FlowRouter.go("/");
        }
        //console.log("passei de novo");
    }
});

FlowRouter.route('/info2', {
    name: 'info2',
    action() {
        //console.log("passei em router/perguntas");
        if (Meteor.user())
            BlazeLayout.render('app', { main: 'info2' });
        else {
            Meteor.logout();
            FlowRouter.go("/");
        }
        //console.log("passei de novo");
    }
});

FlowRouter.route('/info3', {
    name: 'info3',
    action() {
        //console.log("passei em router/perguntas");
        if (Meteor.user())
            BlazeLayout.render('app', { main: 'info3' });
        else {
            Meteor.logout();
            FlowRouter.go("/");
        }
        //console.log("passei de novo");
    }
});

FlowRouter.route('/presentes', {
    name: 'presentes',
    action() {
        //console.log("passei em router/perguntas");
        if (Meteor.user())
            BlazeLayout.render('app', { main: 'presentes' });
        else {
            Meteor.logout();
            FlowRouter.go("/");
        }
        //console.log("passei de novo");
    }
});

