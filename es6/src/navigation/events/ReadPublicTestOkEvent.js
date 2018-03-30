import AbstractReadPublicTestOkEvent from "../../../gen/navigation/events/AbstractReadPublicTestOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadPublicTestOkEvent extends AbstractReadPublicTestOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
