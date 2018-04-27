import AbstractLoadUserOkEvent from "../../../gen/profile/events/AbstractLoadUserOkEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadUserOkEvent extends AbstractLoadUserOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
