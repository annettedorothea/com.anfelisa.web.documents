import Event from "../../../gen/ace/Event";

export default class AbstractCreateCategoryOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CreateCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetNewCategoryValues" ];
	}
}


/*       S.D.G.       */
