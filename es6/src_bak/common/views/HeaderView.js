import CommonView from "../views/CommonView";
import Mustache from "mustache";

export default class HeaderView {
    static renderLogout(eventData) {
        eventData.texts = CommonView.getTexts().common;
        const template = $('#logout').html();
        const rendered = Mustache.render(template, eventData);
        $('.login-logout-pane').html(rendered);
    };

}

/*                    S.D.G.                    */
