import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractRevokeUserAccessClickOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.RevokeUserAccessClickOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.displayRevokeUserAccess" ];
	}
}


/*       S.D.G.       */
