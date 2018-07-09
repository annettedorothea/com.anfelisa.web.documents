import AbstractReadReinforceCardsUnauthorizedEvent
    from "../../../gen/navigation/events/AbstractReadReinforceCardsUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadReinforceCardsUnauthorizedEvent extends AbstractReadReinforceCardsUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
