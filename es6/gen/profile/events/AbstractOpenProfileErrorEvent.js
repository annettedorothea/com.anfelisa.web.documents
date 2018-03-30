import Event from "../../../gen/ace/Event";

export default class AbstractOpenProfileErrorEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.OpenProfileErrorEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
