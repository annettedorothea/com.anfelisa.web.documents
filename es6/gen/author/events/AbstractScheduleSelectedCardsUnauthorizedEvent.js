import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractScheduleSelectedCardsUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.ScheduleSelectedCardsUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError", "author.views.CategoriesView.hideConfirmCardDelete" ];
	}
}


/*       S.D.G.       */
