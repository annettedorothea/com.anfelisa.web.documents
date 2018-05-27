import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractSearchDuplicateCardsTooShortEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.SearchDuplicateCardsTooShortEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetDuplicates" ];
	}
}


/*       S.D.G.       */
