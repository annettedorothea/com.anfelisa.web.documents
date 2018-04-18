import AbstractOpenReallyDeleteDialogRemoveCourseFromUserEvent from "../../../gen/common/events/AbstractOpenReallyDeleteDialogRemoveCourseFromUserEvent";
import AppUtils from "../../app/AppUtils";

export default class OpenReallyDeleteDialogRemoveCourseFromUserEvent extends AbstractOpenReallyDeleteDialogRemoveCourseFromUserEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
