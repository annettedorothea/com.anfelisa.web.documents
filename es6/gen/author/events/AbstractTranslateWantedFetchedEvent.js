import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractTranslateWantedFetchedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.TranslateWantedFetchedEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.wantedOfNewCardChanged" ];
	}
}


/*       S.D.G.       */
