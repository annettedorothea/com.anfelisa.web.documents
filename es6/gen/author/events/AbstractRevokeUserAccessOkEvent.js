import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractRevokeUserAccessOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.RevokeUserAccessOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.hideRevokeUserAccess" ];
	}
}


/*       S.D.G.       */
