import Event from "../../../gen/ace/Event";

export default class AbstractReadNextCardOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ReadNextCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "navigation.views.ContentView.renderCard", "navigation.views.BoxesView.activateBox" ];
	}
}


/*       S.D.G.       */
