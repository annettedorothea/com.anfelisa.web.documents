import AbstractGivenOfNewCardChangedOkEvent from "../../../gen/author/events/AbstractGivenOfNewCardChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class GivenOfNewCardChangedOkEvent extends AbstractGivenOfNewCardChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
