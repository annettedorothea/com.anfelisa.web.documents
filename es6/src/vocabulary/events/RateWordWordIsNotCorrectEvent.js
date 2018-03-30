import AbstractRateWordWordIsNotCorrectEvent from "../../../gen/vocabulary/events/AbstractRateWordWordIsNotCorrectEvent";
import AppUtils from "../../app/AppUtils";

export default class RateWordWordIsNotCorrectEvent extends AbstractRateWordWordIsNotCorrectEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
