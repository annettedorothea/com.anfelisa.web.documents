import AbstractWantedOfEditedCardChangedOkEvent from "../../../gen/author/events/AbstractWantedOfEditedCardChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class WantedOfEditedCardChangedOkEvent extends AbstractWantedOfEditedCardChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
