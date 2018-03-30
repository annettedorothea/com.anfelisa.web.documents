import Event from "../../../gen/ace/Event";

export default class AbstractUpdatePasswordMismatchEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.UpdatePasswordMismatchEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
