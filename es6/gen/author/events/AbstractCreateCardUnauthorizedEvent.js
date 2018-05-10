import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractCreateCardUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CreateCardUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
