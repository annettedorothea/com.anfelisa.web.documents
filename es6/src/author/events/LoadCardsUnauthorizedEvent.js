import AbstractLoadCardsUnauthorizedEvent from "../../../gen/author/events/AbstractLoadCardsUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadCardsUnauthorizedEvent extends AbstractLoadCardsUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
