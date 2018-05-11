import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractSearchDuplicateCardsTooShortEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.SearchDuplicateCardsTooShortEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetDuplicates" ];
	}
}


/*       S.D.G.       */
