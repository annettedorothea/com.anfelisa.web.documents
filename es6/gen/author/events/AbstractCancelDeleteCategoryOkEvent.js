import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractCancelDeleteCategoryOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CancelDeleteCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.hideConfirmCategoryDelete" ];
	}
}


/*       S.D.G.       */
