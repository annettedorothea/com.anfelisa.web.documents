import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractPostponeCardsOfBoxUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'box.PostponeCardsOfBoxUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
