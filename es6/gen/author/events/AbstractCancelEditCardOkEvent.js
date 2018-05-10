import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractCancelEditCardOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CancelEditCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetEditCardValues" ];
	}
}


/*       S.D.G.       */
