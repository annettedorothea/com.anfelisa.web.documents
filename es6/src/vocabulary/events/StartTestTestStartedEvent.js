import AbstractStartTestTestStartedEvent from "../../../gen/vocabulary/events/AbstractStartTestTestStartedEvent";
import AppUtils from "../../app/AppUtils";

export default class StartTestTestStartedEvent extends AbstractStartTestTestStartedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
