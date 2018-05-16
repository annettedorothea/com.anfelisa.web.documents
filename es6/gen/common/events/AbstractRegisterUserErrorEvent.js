import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractRegisterUserErrorEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.RegisterUserErrorEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */