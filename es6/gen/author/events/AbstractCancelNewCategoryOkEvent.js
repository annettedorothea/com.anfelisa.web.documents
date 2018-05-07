import Event from "../../../gen/ace/Event";

export default class AbstractCancelNewCategoryOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CancelNewCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetNewValues" ];
	}
}


/*       S.D.G.       */
