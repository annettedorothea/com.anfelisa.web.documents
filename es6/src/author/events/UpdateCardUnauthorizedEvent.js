import AbstractUpdateCardUnauthorizedEvent from "../../../gen/author/events/AbstractUpdateCardUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class UpdateCardUnauthorizedEvent extends AbstractUpdateCardUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
