import AbstractIndexOfNewCardChangedOkEvent from "../../../gen/author/events/AbstractIndexOfNewCardChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class IndexOfNewCardChangedOkEvent extends AbstractIndexOfNewCardChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
