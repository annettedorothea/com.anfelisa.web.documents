import AbstractShowNextWordOfTestShowNextWordOfTestEvent from "../../../gen/vocabulary/events/AbstractShowNextWordOfTestShowNextWordOfTestEvent";
import AppUtils from "../../app/AppUtils";

export default class ShowNextWordOfTestShowNextWordOfTestEvent extends AbstractShowNextWordOfTestShowNextWordOfTestEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
