import CommonView from "../../common/views/CommonView";

export default class UserInfoView {
    static renderUserInfo(eventData) {
        eventData.data.texts = CommonView.getTexts().user;
        const template = $('#profile').html();
        const rendered = Mustache.render(template, eventData.data);
        $('.content-pane').html(rendered);
    };

    static renderCourseSelection(eventData) {
        eventData.data.texts = CommonView.getTexts().user;
        const template = $('#courses').html();
        const rendered = Mustache.render(template, eventData.data);
        $('.content-pane').html(rendered);
    };

    static renderBox(eventData) {
        if (!eventData.data) {
            eventData.data = {};
        }
        eventData.data.texts = CommonView.getTexts().user;
        const template = $('#box').html();
        const rendered = Mustache.render(template, eventData.data);
        $('.content-pane').html(rendered);
    };

    static renderCourseToBox(eventData) {
        eventData.data.texts = CommonView.getTexts().user;
        const template = $('#boxAddCourse').html();
        const rendered = Mustache.render(template, eventData.data);
        $('.content-pane').html(rendered);
    };

    static renderPasswordChange(eventData) {
        eventData.texts = CommonView.getTexts().user;
        const template = $('#changePassword').html();
        const rendered = Mustache.render(template, eventData);
        $('.content-pane').html(rendered);
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
        eventData.texts = CommonView.getTexts().user;
        const template = $('#forgotPassword').html();
        const rendered = Mustache.render(template, eventData);
        $('.content-pane').html(rendered);
    };

    static renderNewPassword(eventData) {
        eventData.texts = CommonView.getTexts().user;
        const template = $('#newPassword').html();
        const rendered = Mustache.render(template, eventData);
        $('.content-pane').html(rendered);
    };

    static renderRegistration(eventData) {
        eventData.texts = CommonView.getTexts().user;
        const template = $('#registration').html();
        const rendered = Mustache.render(template, eventData);
        $('.content-pane').html(rendered);
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
