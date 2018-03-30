import AbstractReadPrivateTestOkEvent from "../../../gen/navigation/events/AbstractReadPrivateTestOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadPrivateTestOkEvent extends AbstractReadPrivateTestOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
