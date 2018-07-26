import AbstractUsernameChangedOkEvent from "../../../gen/common/events/AbstractUsernameChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class UsernameChangedOkEvent extends AbstractUsernameChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
