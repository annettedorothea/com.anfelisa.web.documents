import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractEditCardOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.EditCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.editCard" ];
	}
}


/*       S.D.G.       */
