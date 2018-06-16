import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractPassValueToDictionaryOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.PassValueToDictionaryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.setDictionaryValue" ];
	}
}


/*       S.D.G.       */
