import AbstractDisplayErrorOkEvent from "../../../gen/common/events/AbstractDisplayErrorOkEvent";
import AppUtils from "../../app/AppUtils";

export default class DisplayErrorOkEvent extends AbstractDisplayErrorOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
