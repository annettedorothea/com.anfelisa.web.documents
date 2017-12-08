import AbstractDisplayRemoveCourseFromUserDialogEvent from "../../../gen/common/events/AbstractDisplayRemoveCourseFromUserDialogEvent";

export default class DisplayRemoveCourseFromUserDialogEvent extends AbstractDisplayRemoveCourseFromUserDialogEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
