import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractDeleteCategoryOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.DeleteCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.hideConfirmCategoryDelete" ];
	}
}


/*       S.D.G.       */
