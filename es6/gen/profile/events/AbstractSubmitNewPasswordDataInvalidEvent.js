import Event from "../../../gen/ace/Event";

export default class AbstractSubmitNewPasswordDataInvalidEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.SubmitNewPasswordDataInvalidEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
