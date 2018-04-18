import Event from "../../../gen/ace/Event";

export default class AbstractCreateUserErrorEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.CreateUserErrorEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
