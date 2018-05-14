import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractTranslateWantedFetchedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.TranslateWantedFetchedEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.wantedOfNewCardChanged" ];
	}
}


/*       S.D.G.       */
