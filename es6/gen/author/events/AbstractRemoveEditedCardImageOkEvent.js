import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractRemoveEditedCardImageOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.RemoveEditedCardImageOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.removeEditedCardImage" ];
	}
}


/*       S.D.G.       */
