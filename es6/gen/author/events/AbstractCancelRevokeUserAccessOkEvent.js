import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractCancelRevokeUserAccessOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.CancelRevokeUserAccessOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.hideRevokeUserAccess" ];
	}
}


/*       S.D.G.       */
