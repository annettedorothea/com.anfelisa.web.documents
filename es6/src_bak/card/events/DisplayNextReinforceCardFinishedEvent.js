import AbstractDisplayNextReinforceCardFinishedEvent
    from "../../../gen/card/events/AbstractDisplayNextReinforceCardFinishedEvent";
import AppUtils from "../../app/AppUtils";

export default class DisplayNextReinforceCardFinishedEvent extends AbstractDisplayNextReinforceCardFinishedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
