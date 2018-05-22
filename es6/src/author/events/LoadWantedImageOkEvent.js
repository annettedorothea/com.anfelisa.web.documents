import AbstractLoadWantedImageOkEvent from "../../../gen/author/events/AbstractLoadWantedImageOkEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadWantedImageOkEvent extends AbstractLoadWantedImageOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
