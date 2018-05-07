import AbstractLoadCardsOkEvent from "../../../gen/author/events/AbstractLoadCardsOkEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadCardsOkEvent extends AbstractLoadCardsOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
