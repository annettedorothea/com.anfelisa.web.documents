import AbstractWantedOfNewCardChangedOkEvent from "../../../gen/author/events/AbstractWantedOfNewCardChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class WantedOfNewCardChangedOkEvent extends AbstractWantedOfNewCardChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
