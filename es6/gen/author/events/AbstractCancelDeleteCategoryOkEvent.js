import Event from "../../../gen/ace/Event";

export default class AbstractCancelDeleteCategoryOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CancelDeleteCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.hideConfirmDelete" ];
	}
}


/*       S.D.G.       */
