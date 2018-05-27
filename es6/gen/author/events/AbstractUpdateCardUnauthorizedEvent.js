import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractUpdateCardUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.UpdateCardUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
