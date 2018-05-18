import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadCategoriesOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.LoadCategoriesOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.render", "author.views.CategoriesView.resetEditCardValues", "author.views.CategoriesView.resetEditCategoryValues", "author.views.CategoriesView.resetNewCardValues", "author.views.CategoriesView.resetNewCategoryValues", "author.views.CategoriesView.resetDuplicates", "author.views.CategoriesView.resetFilter", "author.views.CategoriesView.resetGiven", "author.views.CategoriesView.resetWanted" ];
	}
}


/*       S.D.G.       */
