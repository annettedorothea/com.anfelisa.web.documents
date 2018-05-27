import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractDeleteCategoryClickOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.DeleteCategoryClickOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.displayConfirmCategoryDelete" ];
	}
}


/*       S.D.G.       */
