import AbstractReadPublicTestsOkEvent from "../../../gen/navigation/events/AbstractReadPublicTestsOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadPublicTestsOkEvent extends AbstractReadPublicTestsOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
