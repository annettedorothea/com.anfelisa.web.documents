import Event from "../../../gen/ace/Event";

export default class AbstractSubmitRegistrationDataInvalidEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.SubmitRegistrationDataInvalidEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
