import AbstractDisplayWantedReinforceAllEvent from "../../../gen/box/events/AbstractDisplayWantedReinforceAllEvent";
import AppUtils from "../../app/AppUtils";

export default class DisplayWantedReinforceAllEvent extends AbstractDisplayWantedReinforceAllEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
