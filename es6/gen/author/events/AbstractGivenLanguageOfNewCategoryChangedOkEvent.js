import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractGivenLanguageOfNewCategoryChangedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.GivenLanguageOfNewCategoryChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.givenLanguageOfNewCategoryChanged" ];
	}
}


/*       S.D.G.       */
