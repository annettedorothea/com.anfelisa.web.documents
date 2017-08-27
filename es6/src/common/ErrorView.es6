'use strict';

class ErrorView {
    static renderServerError(data) {
        data.message = Texts.errors[data.messageKey];
        const template = $('#serverErrorTemplate').html();
        const rendered = Mustache.render(template, data);
        $('.notifications').html(rendered);
        window.setTimeout(function () {
            $(".notifications div").fadeOut("slow", function () {
                $(".notifications").empty();
            });
        }, 3000);
    };

    static renderError(data) {
        data.message = Texts.errors[data.messageKey];
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
