import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractGivenLanguageOfEditedCategoryChangedOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.GivenLanguageOfEditedCategoryChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.givenLanguageOfEditedCategoryChanged" ];
	}
}


/*       S.D.G.       */
