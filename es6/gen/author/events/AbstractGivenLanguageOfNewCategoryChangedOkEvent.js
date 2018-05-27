import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractGivenLanguageOfNewCategoryChangedOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.GivenLanguageOfNewCategoryChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.givenLanguageOfNewCategoryChanged" ];
	}
}


/*       S.D.G.       */
