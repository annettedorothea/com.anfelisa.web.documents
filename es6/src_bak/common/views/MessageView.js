import CommonView from "../views/CommonView";
import Mustache from "mustache";

export default class MessageView {
    static renderMessage(eventData) {
        eventData.message = CommonView.getTexts().common[eventData.messageKey];
        const template = $('#messageTemplate').html();
        const rendered = Mustache.render(template, eventData);
        $('.notifications').html(rendered);
        window.setTimeout(function () {
            $(".notifications div").fadeOut("slow", function () {
                $(".notifications").empty();
            });
        }, 3000);
    };

}

/*                    S.D.G.                    */
