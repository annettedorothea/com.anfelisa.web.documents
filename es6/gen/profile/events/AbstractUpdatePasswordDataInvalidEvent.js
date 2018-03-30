import Event from "../../../gen/ace/Event";

export default class AbstractUpdatePasswordDataInvalidEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.UpdatePasswordDataInvalidEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
