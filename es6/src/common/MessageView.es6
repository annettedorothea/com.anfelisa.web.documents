'use strict';

class MessageView {
    static renderMessage(eventData) {
        eventData.message = Texts.common[eventData.messageKey];
        $.get('templates/common/messageTemplate.mst', function(template) {
            var rendered = Mustache.render(template, eventData);
            $('.notifications').html(rendered);
        });
        window.setTimeout(function () {
            $(".notifications div").fadeOut("slow", function () {
                $(".notifications").empty();
            });
        }, 3000);
    };
    
}

/*                    S.D.G.                    */
