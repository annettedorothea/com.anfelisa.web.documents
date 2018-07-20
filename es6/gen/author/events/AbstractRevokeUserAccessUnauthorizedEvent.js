import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractRevokeUserAccessUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.RevokeUserAccessUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError", "author.views.CategoriesView.hideRevokeUserAccess" ];
	}
}


/*       S.D.G.       */
