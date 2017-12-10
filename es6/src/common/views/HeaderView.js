import CommonView from "../views/CommonView";

export default class HeaderView {
    static renderLogin(eventData) {
        eventData.texts = CommonView.getTexts().common;
        const template = $('#login').html();
        const rendered = Mustache.render(template, eventData);
        $('.login-logout-pane').html(rendered);
    };

    static renderLogout(eventData) {
        eventData.texts = CommonView.getTexts().common;
        const template = $('#logout').html();
        const rendered = Mustache.render(template, eventData);
        $('.login-logout-pane').html(rendered);
    };

}

/*                    S.D.G.                    */
