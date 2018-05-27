import AbstractDeleteCardUnauthorizedEvent from "../../../gen/author/events/AbstractDeleteCardUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class DeleteCardUnauthorizedEvent extends AbstractDeleteCardUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
