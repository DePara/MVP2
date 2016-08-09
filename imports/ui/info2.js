import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './info2.html';
import './info3.js';

Template.info2.events({
    'click #btn-next-2': function(event) {
        event.preventDefault();

        FlowRouter.go("/info3");
    }
});