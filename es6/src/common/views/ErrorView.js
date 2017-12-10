import CommonView from "../views/CommonView";

export default class ErrorView {
    static renderServerError(data) {
        data.message = CommonView.getTexts().errors[data.messageKey];
        const template = $('#serverErrorTemplate').html();
        const rendered = Mustache.render(template, data);
        $('.notifications').html(rendered);
        window.setTimeout(function () {
            $(".notifications div").fadeOut("slow", function () {
                $(".notifications").empty();
            });
        }, 10000);
    };

    static renderError(data) {
        data.message = CommonView.getTexts().errors[data.messageKey];
        const template = $('#errorTemplate').html();
        const rendered = Mustache.render(template, data);
        $('.notifications').html(rendered);
        window.setTimeout(function () {
            $(".notifications div").fadeOut("slow", function () {
                $(".notifications").empty();
            });
        }, 3000);
    };

}

/*                    S.D.G.                    */
