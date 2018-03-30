import Event from "../../../gen/ace/Event";

export default class AbstractSaveProfileDataInvalidEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.SaveProfileDataInvalidEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
