import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractIndexOfEditedCardChangedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.IndexOfEditedCardChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.indexOfEditedCardChanged" ];
	}
}


/*       S.D.G.       */