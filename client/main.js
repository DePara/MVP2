/*import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';*/

import './main.html';
import '../imports/ui/body.js';
import '../imports/ui/navbar.js';
import '../imports/ui/footer.js';
import '../imports/ui/regform.js';
import '../imports/ui/dashboard.js';
import '../imports/startup/accounts-config.js';
import '../imports/lib/router/router.js';
import '../imports/lib/bootstrap.css';
import '../imports/lib/TweenMax.min.js';

/*
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/