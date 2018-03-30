import AbstractReadPrivateTestsOkEvent from "../../../gen/navigation/events/AbstractReadPrivateTestsOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadPrivateTestsOkEvent extends AbstractReadPrivateTestsOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
