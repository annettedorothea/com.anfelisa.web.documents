import AbstractUsernameChangedInLoginOkEvent from "../../../gen/common/events/AbstractUsernameChangedInLoginOkEvent";
import AppUtils from "../../app/AppUtils";

export default class UsernameChangedInLoginOkEvent extends AbstractUsernameChangedInLoginOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
