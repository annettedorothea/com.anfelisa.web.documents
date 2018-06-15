import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadNextReinforceCardOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.LoadNextReinforceCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxReinforceView.render" ];
	}
}


/*       S.D.G.       */
