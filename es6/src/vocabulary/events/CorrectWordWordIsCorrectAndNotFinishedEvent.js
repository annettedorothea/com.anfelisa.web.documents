import AbstractCorrectWordWordIsCorrectAndNotFinishedEvent from "../../../gen/vocabulary/events/AbstractCorrectWordWordIsCorrectAndNotFinishedEvent";
import AppUtils from "../../app/AppUtils";

export default class CorrectWordWordIsCorrectAndNotFinishedEvent extends AbstractCorrectWordWordIsCorrectAndNotFinishedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
