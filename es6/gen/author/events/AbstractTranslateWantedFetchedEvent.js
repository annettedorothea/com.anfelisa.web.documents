import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractTranslateWantedFetchedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.TranslateWantedFetchedEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.wantedOfNewCardChanged", "author.views.CategoriesView.displayDictionary" ];
	}
}


/*       S.D.G.       */
