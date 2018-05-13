import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractWantedLanguageOfNewCategoryChangedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.WantedLanguageOfNewCategoryChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.wantedLanguageOfNewCategoryChanged" ];
	}
}


/*       S.D.G.       */
