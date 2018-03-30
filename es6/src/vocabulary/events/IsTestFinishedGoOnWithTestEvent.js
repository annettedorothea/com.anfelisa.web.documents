import AbstractIsTestFinishedGoOnWithTestEvent from "../../../gen/vocabulary/events/AbstractIsTestFinishedGoOnWithTestEvent";
import AppUtils from "../../app/AppUtils";

export default class IsTestFinishedGoOnWithTestEvent extends AbstractIsTestFinishedGoOnWithTestEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
