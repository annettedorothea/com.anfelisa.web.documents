import Event from "../../../gen/ace/Event";

export default class AbstractReadPrivateTestUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ReadPrivateTestUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
