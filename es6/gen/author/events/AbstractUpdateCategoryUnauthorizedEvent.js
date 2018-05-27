import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractUpdateCategoryUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.UpdateCategoryUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
