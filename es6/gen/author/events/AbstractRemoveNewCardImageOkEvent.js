import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractRemoveNewCardImageOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.RemoveNewCardImageOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.removeNewCardImage" ];
	}
}


/*       S.D.G.       */
