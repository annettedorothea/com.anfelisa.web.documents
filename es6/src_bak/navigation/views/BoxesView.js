import CommonView from "../../common/views/CommonView";
import Mustache from "mustache";

export default class BoxesView {
    static renderBoxes(eventData) {
        eventData.data.texts = CommonView.getTexts().common;
        const template = $('#myBoxesTemplate').html();
        const rendered = Mustache.render(template, eventData.data);
        $(".box-navigation").html(rendered);
    };

    static activateBox(eventData) {
        $('.box-navigation li').removeClass('active');
        $('.box-navigation .box_' + eventData.data.boxId).addClass('active');
    };

    static hideBoxes() {
        $('.box-navigation').empty();
    };

}

/*                    S.D.G.                    */
