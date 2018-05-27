import AbstractCheckUsernameNotAvailableEvent from "../../../gen/common/events/AbstractCheckUsernameNotAvailableEvent";
import AppUtils from "../../app/AppUtils";

export default class CheckUsernameNotAvailableEvent extends AbstractCheckUsernameNotAvailableEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
