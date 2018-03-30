import AbstractDisplayNextReinforceCardNextEvent from "../../../gen/card/events/AbstractDisplayNextReinforceCardNextEvent";
import AppUtils from "../../app/AppUtils";

export default class DisplayNextReinforceCardNextEvent extends AbstractDisplayNextReinforceCardNextEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
