import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractNameOfEditedCategoryChangedOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.NameOfEditedCategoryChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.nameOfEditedCategoryChanged" ];
	}
}


/*       S.D.G.       */
