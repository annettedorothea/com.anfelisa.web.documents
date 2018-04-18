import AbstractOpenProfileUserInfoReadEvent from "../../../gen/profile/events/AbstractOpenProfileUserInfoReadEvent";
import AppUtils from "../../app/AppUtils";

export default class OpenProfileUserInfoReadEvent extends AbstractOpenProfileUserInfoReadEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
