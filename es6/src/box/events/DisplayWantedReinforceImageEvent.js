import AbstractDisplayWantedReinforceImageEvent from "../../../gen/box/events/AbstractDisplayWantedReinforceImageEvent";
import AppUtils from "../../app/AppUtils";

export default class DisplayWantedReinforceImageEvent extends AbstractDisplayWantedReinforceImageEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
