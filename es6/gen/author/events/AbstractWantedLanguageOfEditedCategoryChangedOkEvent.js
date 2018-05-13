import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractWantedLanguageOfEditedCategoryChangedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.WantedLanguageOfEditedCategoryChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.wantedLanguageOfEditedCategoryChanged" ];
	}
}


/*       S.D.G.       */
