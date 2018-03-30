import Event from "../../../gen/ace/Event";

export default class AbstractConfirmEmailSavedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.ConfirmEmailSavedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
