'use strict';

class TestView {
    static renderResult(eventData) {
        const template = $('#result_' + eventData.language).html();
        const rendered = Mustache.render(template, eventData);
        $('#correctParagraph').html(rendered);
    };

}

/*                    S.D.G.                    */
