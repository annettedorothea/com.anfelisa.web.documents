import AbstractLoadNextReinforceCardUnauthorizedEvent from "../../../gen/box/events/AbstractLoadNextReinforceCardUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadNextReinforceCardUnauthorizedEvent extends AbstractLoadNextReinforceCardUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
