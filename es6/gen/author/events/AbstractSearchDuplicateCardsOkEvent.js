import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractSearchDuplicateCardsOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.SearchDuplicateCardsOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.initDuplicates" ];
	}
}


/*       S.D.G.       */
