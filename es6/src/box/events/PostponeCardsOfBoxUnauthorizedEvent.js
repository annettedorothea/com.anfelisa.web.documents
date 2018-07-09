import AbstractPostponeCardsOfBoxUnauthorizedEvent
    from "../../../gen/box/events/AbstractPostponeCardsOfBoxUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class PostponeCardsOfBoxUnauthorizedEvent extends AbstractPostponeCardsOfBoxUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
