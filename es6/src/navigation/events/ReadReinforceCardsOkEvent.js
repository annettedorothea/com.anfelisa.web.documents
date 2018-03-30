import AbstractReadReinforceCardsOkEvent from "../../../gen/navigation/events/AbstractReadReinforceCardsOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadReinforceCardsOkEvent extends AbstractReadReinforceCardsOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
