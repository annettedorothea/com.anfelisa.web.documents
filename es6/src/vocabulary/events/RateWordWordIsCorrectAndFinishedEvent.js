import AbstractRateWordWordIsCorrectAndFinishedEvent from "../../../gen/vocabulary/events/AbstractRateWordWordIsCorrectAndFinishedEvent";
import AppUtils from "../../app/AppUtils";

export default class RateWordWordIsCorrectAndFinishedEvent extends AbstractRateWordWordIsCorrectAndFinishedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
