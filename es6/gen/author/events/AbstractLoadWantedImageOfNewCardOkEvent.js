import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractLoadWantedImageOfNewCardOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.LoadWantedImageOfNewCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.displayImageOfNewCard" ];
	}
}


/*       S.D.G.       */
