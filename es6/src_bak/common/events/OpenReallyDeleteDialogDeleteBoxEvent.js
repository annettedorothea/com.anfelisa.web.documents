import AbstractOpenReallyDeleteDialogDeleteBoxEvent
    from "../../../gen/common/events/AbstractOpenReallyDeleteDialogDeleteBoxEvent";
import AppUtils from "../../app/AppUtils";

export default class OpenReallyDeleteDialogDeleteBoxEvent extends AbstractOpenReallyDeleteDialogDeleteBoxEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
