import AbstractCancelDeleteBoxOkEvent from "../../../gen/box/events/AbstractCancelDeleteBoxOkEvent";
import AppUtils from "../../app/AppUtils";

export default class CancelDeleteBoxOkEvent extends AbstractCancelDeleteBoxOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
