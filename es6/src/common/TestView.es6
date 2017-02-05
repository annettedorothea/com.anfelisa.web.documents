'use strict';

class TestView {
    static renderResult(eventData) {
        $.get('templates/test/result_' + eventData.language + '.mst', function(template) {
            var rendered = Mustache.render(template, eventData);
            $('#correctParagraph').html(rendered);
        });
    };
    
}

/*                    S.D.G.                    */
