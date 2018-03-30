import AbstractRateWordWordIsCorrectAndNotFinishedEvent from "../../../gen/vocabulary/events/AbstractRateWordWordIsCorrectAndNotFinishedEvent";
import AppUtils from "../../app/AppUtils";

export default class RateWordWordIsCorrectAndNotFinishedEvent extends AbstractRateWordWordIsCorrectAndNotFinishedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
