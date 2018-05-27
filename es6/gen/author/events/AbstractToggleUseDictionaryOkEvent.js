import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractToggleUseDictionaryOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.ToggleUseDictionaryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.toggleUseDictionary" ];
	}
}


/*       S.D.G.       */
