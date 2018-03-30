import Event from "../../../gen/ace/Event";

export default class AbstractReadPrivateLessonsUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ReadPrivateLessonsUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
