import AbstractLoadNextReinforceCardOkEvent from "../../../gen/box/events/AbstractLoadNextReinforceCardOkEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadNextReinforceCardOkEvent extends AbstractLoadNextReinforceCardOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
