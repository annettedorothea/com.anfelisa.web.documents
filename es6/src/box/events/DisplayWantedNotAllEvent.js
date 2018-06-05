import AbstractDisplayWantedNotAllEvent from "../../../gen/box/events/AbstractDisplayWantedNotAllEvent";
import AppUtils from "../../app/AppUtils";

export default class DisplayWantedNotAllEvent extends AbstractDisplayWantedNotAllEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
