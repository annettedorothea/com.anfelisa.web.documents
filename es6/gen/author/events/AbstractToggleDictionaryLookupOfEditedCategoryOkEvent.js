import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractToggleDictionaryLookupOfEditedCategoryOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.ToggleDictionaryLookupOfEditedCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.toggleDictionaryLookupOfEditedCategory" ];
	}
}


/*       S.D.G.       */
