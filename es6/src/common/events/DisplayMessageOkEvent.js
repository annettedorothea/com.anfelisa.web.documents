import AbstractDisplayMessageOkEvent from "../../../gen/common/events/AbstractDisplayMessageOkEvent";
import AppUtils from "../../app/AppUtils";

export default class DisplayMessageOkEvent extends AbstractDisplayMessageOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
