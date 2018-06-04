import AbstractLoadNextCardOkEvent from "../../../gen/box/events/AbstractLoadNextCardOkEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadNextCardOkEvent extends AbstractLoadNextCardOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
