import AbstractDisplayWantedImageEvent from "../../../gen/box/events/AbstractDisplayWantedImageEvent";
import AppUtils from "../../app/AppUtils";

export default class DisplayWantedImageEvent extends AbstractDisplayWantedImageEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
