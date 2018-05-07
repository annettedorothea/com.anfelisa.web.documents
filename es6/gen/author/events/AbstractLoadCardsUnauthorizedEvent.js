import Event from "../../../gen/ace/Event";

export default class AbstractLoadCardsUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.LoadCardsUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
