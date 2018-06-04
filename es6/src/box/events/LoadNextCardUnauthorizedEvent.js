import AbstractLoadNextCardUnauthorizedEvent from "../../../gen/box/events/AbstractLoadNextCardUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadNextCardUnauthorizedEvent extends AbstractLoadNextCardUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
