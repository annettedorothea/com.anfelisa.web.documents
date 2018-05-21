import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractToggelUseDictionaryOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.ToggelUseDictionaryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.toggleUseDictionary" ];
	}
}


/*       S.D.G.       */
