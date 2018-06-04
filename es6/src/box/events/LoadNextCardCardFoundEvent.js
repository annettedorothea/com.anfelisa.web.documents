import AbstractLoadNextCardCardFoundEvent from "../../../gen/box/events/AbstractLoadNextCardCardFoundEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadNextCardCardFoundEvent extends AbstractLoadNextCardCardFoundEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
