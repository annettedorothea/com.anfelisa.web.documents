import AbstractNameOfNewCardChangedOkEvent from "../../../gen/author/events/AbstractNameOfNewCardChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class NameOfNewCardChangedOkEvent extends AbstractNameOfNewCardChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
