import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractToggleAllScheduleCardSelectionOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.ToggleAllScheduleCardSelectionOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.toggleAllScheduleCardSelection" ];
	}
}


/*       S.D.G.       */
