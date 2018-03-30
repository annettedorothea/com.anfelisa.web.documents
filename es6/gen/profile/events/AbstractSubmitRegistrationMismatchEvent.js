import Event from "../../../gen/ace/Event";

export default class AbstractSubmitRegistrationMismatchEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.SubmitRegistrationMismatchEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
