import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadCategoriesUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.LoadCategoriesUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
