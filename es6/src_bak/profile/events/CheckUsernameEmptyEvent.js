import AbstractCheckUsernameEmptyEvent from "../../../gen/profile/events/AbstractCheckUsernameEmptyEvent";
import AppUtils from "../../app/AppUtils";

export default class CheckUsernameEmptyEvent extends AbstractCheckUsernameEmptyEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
