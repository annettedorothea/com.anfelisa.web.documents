import CommonView from "../views/CommonView";
import Mustache from "mustache";

export default class ErrorView {
    static renderError(data) {
        if (data.messageKey && CommonView.getTexts().errors[data.messageKey]) {
            data.message = CommonView.getTexts().errors[data.messageKey];
        }
        const template = $('#errorTemplate').html();
        const rendered = Mustache.render(template, data);
        $('.notifications').html(rendered);
        window.setTimeout(function () {
            $(".notifications div").fadeOut("slow", function () {
                $(".notifications").empty();
            });
        }, 10000);
    };

}

/*                    S.D.G.                    */
