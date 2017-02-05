'use strict';

class BoxesView {
    static renderBoxes(eventData) {
        eventData.data.texts = Texts.common;
        $.get('templates/navigation/myBoxesTemplate.mst', function(template) {
            var rendered = Mustache.render(template, eventData.data);
            $(".box-navigation").html(rendered);
        });
    };
    static activateBox(eventData) {
        $('.box-navigation li').removeClass('active');
        $('.box-navigation .box_' +  eventData.data.boxId).addClass('active');
    };

    static hideBoxes(eventData) {
        $('.box-navigation').empty();
    };
    
}

/*                    S.D.G.                    */
