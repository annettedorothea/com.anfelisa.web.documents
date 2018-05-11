import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractSearchDuplicateCardsOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.SearchDuplicateCardsOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.initDuplicates" ];
	}
}


/*       S.D.G.       */
