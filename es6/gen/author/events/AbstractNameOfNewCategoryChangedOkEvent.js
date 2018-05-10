import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractNameOfNewCategoryChangedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.NameOfNewCategoryChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.nameOfNewCategoryChanged" ];
	}
}


/*       S.D.G.       */
