import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractIndexOfEditedCategoryChangedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.IndexOfEditedCategoryChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.indexOfEditedCategoryChanged" ];
	}
}


/*       S.D.G.       */
