import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './info3.html';
import './presentes.js';

Template.info3.events({
    'click #btn-next-3': function(event) {
        event.preventDefault();

        FlowRouter.go("/presentes");
    }
});