import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './regform.html';

var tabpos = 0;
var tab = ["#signup", "#login"];

Template.regform.onRendered(function() { 
    tabpos = 0;  
    setTimeout(function() {
        $('input').each(function() {
            $(this).val('');
        });
    }, 100);

});

// esqueminha de animação e login/register
Template.regform.events({
    'click .tab a' (event) {
        event.preventDefault();

        let target = event.currentTarget;

        if (!$(target).parent().hasClass("active")) {

            $(target).parent().addClass('active');
            $(target).parent().siblings().removeClass('active');

            tabpos = !tabpos;

            let target2 = tab[+tabpos];

            $('.tab-content > div').not(target2).hide();

            $(target2).fadeIn(600);
        }
    },
    'keyup input, focusin input, focusout input, change input, keyup textarea, focusin textarea, focusout textarea' (event) {

        let first = true;

        var target = $(event.currentTarget),
            label = target.prev('label');

        if (event.type === 'keyup' || event.type === 'change' && first) {
            first = false;
            if (target.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.addClass('active highlight');
            }
        } else if (event.type === 'focusout') {
            if (target.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.removeClass('highlight');
            }
        } else if (event.type === 'focusin') {
            if (target.val() === '') {
                label.removeClass('highlight');
            } else if (target.val() !== '') {
                label.addClass('highlight');
            }
        } 
    },
});
// fim do esqueminha

// login e registro no bd

if (Meteor.isClient) {
    Template.regform.events({
        'submit #frm-signup': function(event) {
            event.preventDefault();
            var nameVar = event.target.regName.value;
            var surnameVar = event.target.regSurname.value;
            var emailVar = event.target.regEmail.value;
            var passVar = event.target.regPass.value;
            Accounts.createUser({
                email: emailVar,
                password: passVar,
                profile: 
                {
                    name: nameVar,
                    surname: surnameVar
                }
            });            
            setTimeout(function() {
                if (Meteor.user()){
                    FlowRouter.go('/');
                } else {
                    $("#signup-error").css({
                        "display": "block",
                        "visibility": "visible"
                    });
                }
            }, 300);
        },        
        'submit #frm-login': function(event) {
            event.preventDefault();
            var emailVar = event.target.logEmail.value;
            var passVar = event.target.logPass.value;
            Meteor.loginWithPassword(emailVar, passVar);

            // gambiarra pra fazer o login redirecionar pra pagina principal
            // tem que botar um loading aqui
            setTimeout(function() {
                if (Meteor.user()){
                    FlowRouter.go('/');
                } else {
                    $("#signin-error").css({
                        "display": "block",
                        "visibility": "visible"
                    });
                }
            }, 300);
        }
    });

}
