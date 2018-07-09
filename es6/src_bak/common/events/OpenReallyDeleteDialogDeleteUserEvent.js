import AbstractOpenReallyDeleteDialogDeleteUserEvent
    from "../../../gen/common/events/AbstractOpenReallyDeleteDialogDeleteUserEvent";
import AppUtils from "../../app/AppUtils";

export default class OpenReallyDeleteDialogDeleteUserEvent extends AbstractOpenReallyDeleteDialogDeleteUserEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
