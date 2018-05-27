import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractTranslateGivenFetchedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.TranslateGivenFetchedEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.givenOfNewCardChanged", "author.views.CategoriesView.displayDictionary" ];
	}
}


/*       S.D.G.       */
