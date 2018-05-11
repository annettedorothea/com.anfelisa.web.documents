import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractSearchDuplicateCardsUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.SearchDuplicateCardsUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError", "author.views.CategoriesView.hideConfirmCardDelete" ];
	}
}


/*       S.D.G.       */
