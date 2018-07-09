import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractSearchDuplicateCardsUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.SearchDuplicateCardsUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
