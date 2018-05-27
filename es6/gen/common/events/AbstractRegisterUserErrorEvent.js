import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractRegisterUserErrorEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.RegisterUserErrorEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
