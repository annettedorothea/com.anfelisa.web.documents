import AbstractGivenOfNewCardChangedUnauthorizedEvent from "../../../gen/author/events/AbstractGivenOfNewCardChangedUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class GivenOfNewCardChangedUnauthorizedEvent extends AbstractGivenOfNewCardChangedUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
