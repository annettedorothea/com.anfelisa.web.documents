import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractPostponeCardsOfBoxUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.PostponeCardsOfBoxUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
