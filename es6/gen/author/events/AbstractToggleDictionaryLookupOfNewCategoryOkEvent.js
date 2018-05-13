import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractToggleDictionaryLookupOfNewCategoryOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.ToggleDictionaryLookupOfNewCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.toggleDictionaryLookupOfNewCategory" ];
	}
}


/*       S.D.G.       */
