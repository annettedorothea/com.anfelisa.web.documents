import AbstractReadResultUnauthorizedEvent from "../../../gen/navigation/events/AbstractReadResultUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadResultUnauthorizedEvent extends AbstractReadResultUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
