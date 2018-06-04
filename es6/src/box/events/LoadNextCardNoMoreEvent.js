import AbstractLoadNextCardNoMoreEvent from "../../../gen/box/events/AbstractLoadNextCardNoMoreEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadNextCardNoMoreEvent extends AbstractLoadNextCardNoMoreEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
