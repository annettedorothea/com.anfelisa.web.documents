import AbstractIndexOfEditedCardChangedOkEvent from "../../../gen/author/events/AbstractIndexOfEditedCardChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class IndexOfEditedCardChangedOkEvent extends AbstractIndexOfEditedCardChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
