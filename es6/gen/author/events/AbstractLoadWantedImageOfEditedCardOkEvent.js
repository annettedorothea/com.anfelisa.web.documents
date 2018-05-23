import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractLoadWantedImageOfEditedCardOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.LoadWantedImageOfEditedCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.displayImageOfEditedCard" ];
	}
}


/*       S.D.G.       */
