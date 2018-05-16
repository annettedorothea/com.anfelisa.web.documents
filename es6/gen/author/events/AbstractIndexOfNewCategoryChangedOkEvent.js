import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractIndexOfNewCategoryChangedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.IndexOfNewCategoryChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.indexOfNewCategoryChanged" ];
	}
}


/*       S.D.G.       */