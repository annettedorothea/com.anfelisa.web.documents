import AbstractCorrectWordWordIsCorrectAndFinishedEvent from "../../../gen/vocabulary/events/AbstractCorrectWordWordIsCorrectAndFinishedEvent";
import AppUtils from "../../app/AppUtils";

export default class CorrectWordWordIsCorrectAndFinishedEvent extends AbstractCorrectWordWordIsCorrectAndFinishedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
