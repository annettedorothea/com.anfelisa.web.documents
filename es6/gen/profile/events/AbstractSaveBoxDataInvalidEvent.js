import Event from "../../../gen/ace/Event";

export default class AbstractSaveBoxDataInvalidEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.SaveBoxDataInvalidEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
