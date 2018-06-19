import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractToggleScheduleCardSelectionOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.ToggleScheduleCardSelectionOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.toggleScheduleCardSelection" ];
	}
}


/*       S.D.G.       */
