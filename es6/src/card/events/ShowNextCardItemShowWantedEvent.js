import AbstractShowNextCardItemShowWantedEvent from "../../../gen/card/events/AbstractShowNextCardItemShowWantedEvent";
import AppUtils from "../../app/AppUtils";

export default class ShowNextCardItemShowWantedEvent extends AbstractShowNextCardItemShowWantedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
