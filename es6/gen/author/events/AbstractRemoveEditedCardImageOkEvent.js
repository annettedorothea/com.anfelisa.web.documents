import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractRemoveEditedCardImageOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.RemoveEditedCardImageOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.removeEditedCardImage" ];
	}
}


/*       S.D.G.       */
