import AbstractGivenOfEditedCardChangedOkEvent
    from "../../../gen/author/events/AbstractGivenOfEditedCardChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class GivenOfEditedCardChangedOkEvent extends AbstractGivenOfEditedCardChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
