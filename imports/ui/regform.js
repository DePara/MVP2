import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './regform.html';

var tabpos = 0;

var tab = ["#signup", "#login"];

//console.log("regform.js");

Template.regform.onRendered(function() { 
    //console.log("onrendered"); 
    tabpos = 0;  
    setTimeout(function() {
        $('input').each(function() {
            /*var $this = $(this);

            $this

            $this.after($this.clone()).remove();*/

            $(this).val('');

            //console.log($(this));
        });
    }, 100);

});



// esqueminha de animação e login/register
Template.regform.events({
    'click .tab a' (event) {
        event.preventDefault();

        //console.log("cliquei na aba");

        let target = event.currentTarget;

        //console.log($(event.currentTarget).parent().hasClass("active"));

        if (!$(target).parent().hasClass("active")) {

            $(target).parent().addClass('active');
            $(target).parent().siblings().removeClass('active');

            tabpos = !tabpos;

            let target2 = tab[+tabpos];

            //console.log("passei com " + tabpos + " e " + tab[tabpos]);

            $('.tab-content > div').not(target2).hide();

            $(target2).fadeIn(600);
        }
    },
    'keyup input, focusin input, focusout input, change input, keyup textarea, focusin textarea, focusout textarea' (event) {

        /*var target = event.currentTarget;
        var label = target.closest('label');*/

        let first = true;

        var target = $(event.currentTarget),
            label = target.prev('label');

        //console.log(event);

        if (event.type === 'keyup' || event.type === 'change' && first) {
            //console.log("foi keyup");
            first = false;
            if (target.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.addClass('active highlight');
            }
        } else if (event.type === 'focusout') {
            //console.log("foi focusout");
            if (target.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.removeClass('highlight');
            }
        } else if (event.type === 'focusin') {
            //console.log("foi focusin");
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
            if (Meteor.user()){
                FlowRouter.go('/');
            }
        },        
        'submit #frm-login': function(event) {
            event.preventDefault();
            var emailVar = event.target.logEmail.value;
            var passVar = event.target.logPass.value;
            Meteor.loginWithPassword(emailVar, passVar);

            console.log(Meteor.user());

            // gambiarra pra fazer o login redirecionar pra pagina principal
            // tem que botar um loading aqui
            setTimeout(function() {
                if (Meteor.user()){
                    FlowRouter.go('/');
                }
            }, 500);

            console.log(Meteor.user());
        }
    });
/*
    Template.navbar.events({
        'click .logout': function(event) {
            event.preventDefault();
            Meteor.logout();
            FlowRouter.go('/');
        }
    });*/
}

// fim do login e registro



/*Template.regform.events({
    'click .tab-link': function(e) {
        e.preventDefault();
        console.log("You pressed the button");
    },
});*/

/*
$(document).ready(function() {

    console.log("document ready funcion");

    $('.frm-sign').find('input, textarea').on('keyup blur focus', function(e) {

        console.log("1");

        var $this = $(this),
            label = $this.prev('label');

        if (e.type === 'keyup') {
            if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.addClass('active highlight');
            }
        } else if (e.type === 'blur') {
            if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.removeClass('highlight');
            }
        } else if (e.type === 'focus') {

            if ($this.val() === '') {
                label.removeClass('highlight');
            } else if ($this.val() !== '') {
                label.addClass('highlight');
            }
        }

    });

    $('.tab a').on('click', function(e) {

        console.log("2");

        e.preventDefault();

        if (!$(this).parent().hasClass("active")) {

            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');

            tabpos = !tabpos;

            var target = tab[+ tabpos];

            console.log("passei com " + tabpos + " e " + tab[tabpos]);

            $('.tab-content > div').not(target).hide();

            $(target).fadeIn(600);
        }
    });

});

*/


/*
if (Meteor.isClient) {
    Template.reg-form.events({
        'click .reg-button': function(event) {
            event.preventDefault();
            var emailVar = event.target.registerEmail.value;
            var passwordVar = event.target.registerPassword.value;
            Accounts.createUser({
                email: emailVar,
                password: passwordVar
            });
        }
    });*/
