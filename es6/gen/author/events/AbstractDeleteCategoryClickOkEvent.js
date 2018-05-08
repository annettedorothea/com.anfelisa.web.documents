import Event from "../../../gen/ace/Event";

export default class AbstractDeleteCategoryClickOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.DeleteCategoryClickOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.displayConfirmCategoryDelete" ];
	}
}


/*       S.D.G.       */
