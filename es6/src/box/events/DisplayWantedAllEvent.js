import AbstractDisplayWantedAllEvent from "../../../gen/box/events/AbstractDisplayWantedAllEvent";
import AppUtils from "../../app/AppUtils";

export default class DisplayWantedAllEvent extends AbstractDisplayWantedAllEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
