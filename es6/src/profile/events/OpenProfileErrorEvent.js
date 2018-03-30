import AbstractOpenProfileErrorEvent from "../../../gen/profile/events/AbstractOpenProfileErrorEvent";
import AppUtils from "../../app/AppUtils";

export default class OpenProfileErrorEvent extends AbstractOpenProfileErrorEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
