import AbstractWamtedOfEditedCardChangedOkEvent from "../../../gen/author/events/AbstractWamtedOfEditedCardChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class WamtedOfEditedCardChangedOkEvent extends AbstractWamtedOfEditedCardChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
