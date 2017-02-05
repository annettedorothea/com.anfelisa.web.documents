'use strict';

class UserInfoView {
    static renderUserInfo(eventData) {
        eventData.data.texts = Texts.user;
        $.get('templates/user/profile.mst', function(template) {
            var rendered = Mustache.render(template, eventData.data);
            $('.content-pane').html(rendered);
        });
    };
    
    static renderCourseSelection(eventData) {
        eventData.data.texts = Texts.user;
        $.get('templates/user/courses.mst', function(template) {
            var rendered = Mustache.render(template, eventData.data);
            $('.content-pane').html(rendered);
        });
    };

    static renderBox(eventData) {
        if (!eventData.data) {
            eventData.data = {};
        }
        eventData.data.texts = Texts.user;
        $.get('templates/user/box.mst', function(template) {
            var rendered = Mustache.render(template, eventData.data);
            $('.content-pane').html(rendered);
        });
    };

    static renderCourseToBox(eventData) {
        eventData.data.texts = Texts.user;
        $.get('templates/user/boxAddCourse.mst', function(template) {
            var rendered = Mustache.render(template, eventData.data);
            $('.content-pane').html(rendered);
        });
    };

    static renderPasswordChange(eventData) {
        eventData.texts = Texts.user;
        $.get('templates/user/changePassword.mst', function(template) {
            var rendered = Mustache.render(template, eventData);
            $('.content-pane').html(rendered);
        });
    };

    static passwordOK(eventData) {
        $("#passwordRepetitionDiv").removeClass("has-error");
        $("#passwordRepetitionDiv .help-block").hide();
        $("#passwordDiv").removeClass("has-error");
        $("#passwordDiv .help-block").hide();
    };

    static passwordMismatch(eventData) {
        $("#passwordDiv").removeClass("has-error");
        $("#passwordDiv .help-block").hide();
        $("#passwordRepetitionDiv").addClass("has-error");
        $("#passwordRepetitionDiv .help-block").hide();
        $("#passwordRepetitionDiv .passwordMismatch").show();
    };

    static passwordEmpty(eventData) {
        $("#passwordRepetitionDiv").removeClass("has-error");
        $("#passwordRepetitionDiv .help-block").hide();
        $("#passwordDiv").removeClass("has-error");
        $("#passwordDiv .help-block").hide();
        eventData.emptyIds.forEach((id) => {
            $("#" + id + "Div").addClass("has-error");
            $("#" + id + "Div .help-block").hide();
            $("#" + id + "Div .notEmpty").show();
        })
    };

    static renderForgotPassword(eventData) {
        eventData.texts = Texts.user;
        $.get('templates/user/forgotPassword.mst', function(template) {
            var rendered = Mustache.render(template, eventData);
            $('.content-pane').html(rendered);
        });
    };

    static renderNewPassword(eventData) {
        eventData.texts = Texts.user;
        $.get('templates/user/newPassword.mst', function(template) {
            var rendered = Mustache.render(template, eventData);
            $('.content-pane').html(rendered);
        });
    };

    static renderRegistration(eventData) {
        eventData.texts = Texts.user;
        $.get('templates/user/registration.mst', function(template) {
            var rendered = Mustache.render(template, eventData);
            $('.content-pane').html(rendered);
        });
    };

    static renderUsernameIsAvailable(eventData) {
        $("#usernameDiv").removeClass("has-error");
        $("#usernameDiv .help-block").hide();
    };

    static renderUsernameIsNotAvailable(eventData) {
        $("#usernameDiv").addClass("has-error");
        $("#usernameDiv .help-block").hide();
        $("#usernameDiv .usernameNotAvailable").show();
    };


}

/*                    S.D.G.                    */
