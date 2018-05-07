import AbstractNameOfEditedCardChangedOkEvent from "../../../gen/author/events/AbstractNameOfEditedCardChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class NameOfEditedCardChangedOkEvent extends AbstractNameOfEditedCardChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
