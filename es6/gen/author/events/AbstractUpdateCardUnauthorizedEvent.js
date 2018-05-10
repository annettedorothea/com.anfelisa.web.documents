import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractUpdateCardUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.UpdateCardUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
