import AbstractLoadNextCardNoCardFoundEvent from "../../../gen/box/events/AbstractLoadNextCardNoCardFoundEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadNextCardNoCardFoundEvent extends AbstractLoadNextCardNoCardFoundEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
