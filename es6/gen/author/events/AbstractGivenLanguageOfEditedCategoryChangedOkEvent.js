import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractGivenLanguageOfEditedCategoryChangedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.GivenLanguageOfEditedCategoryChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.givenLanguageOfEditedCategoryChanged" ];
	}
}


/*       S.D.G.       */
