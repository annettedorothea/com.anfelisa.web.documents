import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractWantedLanguageOfNewCategoryChangedOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.WantedLanguageOfNewCategoryChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.wantedLanguageOfNewCategoryChanged" ];
	}
}


/*       S.D.G.       */
