import Event from "../../../gen/ace/Event";

export default class AbstractReadReinforceCardsUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ReadReinforceCardsUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
