import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractTranslateOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.TranslateOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.wantedOfNewCardChanged" ];
	}
}


/*       S.D.G.       */
