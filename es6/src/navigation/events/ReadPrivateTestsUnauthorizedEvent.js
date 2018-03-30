import AbstractReadPrivateTestsUnauthorizedEvent from "../../../gen/navigation/events/AbstractReadPrivateTestsUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadPrivateTestsUnauthorizedEvent extends AbstractReadPrivateTestsUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
