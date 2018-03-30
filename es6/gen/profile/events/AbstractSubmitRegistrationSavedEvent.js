import Event from "../../../gen/ace/Event";

export default class AbstractSubmitRegistrationSavedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.SubmitRegistrationSavedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
