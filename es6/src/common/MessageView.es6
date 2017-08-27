'use strict';

class MessageView {
    static renderMessage(eventData) {
        eventData.message = Texts.common[eventData.messageKey];
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
