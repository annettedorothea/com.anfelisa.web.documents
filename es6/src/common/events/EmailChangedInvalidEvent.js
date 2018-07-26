import AbstractEmailChangedInvalidEvent from "../../../gen/common/events/AbstractEmailChangedInvalidEvent";
import AppUtils from "../../app/AppUtils";

export default class EmailChangedInvalidEvent extends AbstractEmailChangedInvalidEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
