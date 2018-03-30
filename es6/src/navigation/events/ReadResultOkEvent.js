import AbstractReadResultOkEvent from "../../../gen/navigation/events/AbstractReadResultOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadResultOkEvent extends AbstractReadResultOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
