import AbstractReadPrivateTestUnauthorizedEvent from "../../../gen/navigation/events/AbstractReadPrivateTestUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadPrivateTestUnauthorizedEvent extends AbstractReadPrivateTestUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
