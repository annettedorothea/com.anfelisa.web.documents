import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractToggelInputOrderOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.ToggelInputOrderOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.toggelInputOrder" ];
	}
}


/*       S.D.G.       */
