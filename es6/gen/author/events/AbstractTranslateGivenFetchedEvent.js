import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractTranslateGivenFetchedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.TranslateGivenFetchedEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.givenOfNewCardChanged" ];
	}
}


/*       S.D.G.       */
