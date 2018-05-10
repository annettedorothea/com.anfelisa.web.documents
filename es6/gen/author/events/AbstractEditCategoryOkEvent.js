import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractEditCategoryOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.EditCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.editCategory" ];
	}
}


/*       S.D.G.       */
