import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractCreateCategoryUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.CreateCategoryUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
