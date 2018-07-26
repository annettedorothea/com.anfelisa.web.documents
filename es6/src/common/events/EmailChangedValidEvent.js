import AbstractEmailChangedValidEvent from "../../../gen/common/events/AbstractEmailChangedValidEvent";
import AppUtils from "../../app/AppUtils";

export default class EmailChangedValidEvent extends AbstractEmailChangedValidEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
