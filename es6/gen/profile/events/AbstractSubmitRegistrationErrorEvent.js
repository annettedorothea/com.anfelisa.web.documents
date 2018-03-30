import Event from "../../../gen/ace/Event";

export default class AbstractSubmitRegistrationErrorEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.SubmitRegistrationErrorEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
