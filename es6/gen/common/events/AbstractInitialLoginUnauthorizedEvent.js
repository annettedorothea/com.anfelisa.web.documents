import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractInitialLoginUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.InitialLoginUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
