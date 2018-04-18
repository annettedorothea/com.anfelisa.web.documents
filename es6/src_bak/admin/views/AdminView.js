import CommonView from "../../common/views/CommonView";
import Mustache from "mustache";

export default class AdminView {
	static renderAllUsers(eventData) {
        eventData.data.texts = CommonView.getTexts().user;
        const template = $('#adminUserList').html();
        const rendered = Mustache.render(template, eventData.data);
        $('.content-pane').html(rendered);
	};
	
}

/*                    S.D.G.                    */
