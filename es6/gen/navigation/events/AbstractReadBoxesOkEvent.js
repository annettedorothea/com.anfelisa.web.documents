import Event from "../../../gen/ace/Event";

export default class AbstractReadBoxesOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ReadBoxesOkEvent');
    }
	getNotifiedListeners() {
	    return [ "navigation.views.BoxesView.renderBoxes" ];
	}
}


/*       S.D.G.       */
