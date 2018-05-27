import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractDeleteBoxUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'box.DeleteBoxUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
