import AbstractInitUserEvent from "../../../gen/common/events/AbstractInitUserEvent";
import AppUtils from "../../app/AppUtils";

export default class InitUserEvent extends AbstractInitUserEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
