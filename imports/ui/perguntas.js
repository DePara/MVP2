import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './perguntas.html';

Template.info.events({
    'click #btn-next-1': function(event) {
        event.preventDefault();

        Session.set("")


        FlowRouter.go("/perguntas");
    }
});