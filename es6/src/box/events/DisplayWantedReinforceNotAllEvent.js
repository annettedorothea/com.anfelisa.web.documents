import AbstractDisplayWantedReinforceNotAllEvent
    from "../../../gen/box/events/AbstractDisplayWantedReinforceNotAllEvent";
import AppUtils from "../../app/AppUtils";

export default class DisplayWantedReinforceNotAllEvent extends AbstractDisplayWantedReinforceNotAllEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
