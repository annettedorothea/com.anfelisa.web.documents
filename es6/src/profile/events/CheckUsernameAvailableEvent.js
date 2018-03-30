import AbstractCheckUsernameAvailableEvent from "../../../gen/profile/events/AbstractCheckUsernameAvailableEvent";
import AppUtils from "../../app/AppUtils";

export default class CheckUsernameAvailableEvent extends AbstractCheckUsernameAvailableEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
