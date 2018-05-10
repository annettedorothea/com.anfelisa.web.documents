import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoginUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.LoginUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
