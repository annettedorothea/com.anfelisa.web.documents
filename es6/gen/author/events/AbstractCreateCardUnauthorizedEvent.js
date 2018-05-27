import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractCreateCardUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.CreateCardUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
