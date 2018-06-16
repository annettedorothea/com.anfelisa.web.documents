import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractTranslateGivenFetchedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.TranslateGivenFetchedEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.givenOfNewCardChanged" ];
	}
}


/*       S.D.G.       */
