import AbstractLoadBoxErrorEvent from "../../../gen/profile/events/AbstractLoadBoxErrorEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadBoxErrorEvent extends AbstractLoadBoxErrorEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
