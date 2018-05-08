import Event from "../../../gen/ace/Event";

export default class AbstractCancelEditCardOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CancelEditCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetEditCardValues" ];
	}
}


/*       S.D.G.       */
