import AbstractInitLoginEvent from "../../../gen/common/events/AbstractInitLoginEvent";
import AppUtils from "../../app/AppUtils";

export default class InitLoginEvent extends AbstractInitLoginEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
