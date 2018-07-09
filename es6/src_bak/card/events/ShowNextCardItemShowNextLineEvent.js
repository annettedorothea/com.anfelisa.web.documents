import AbstractShowNextCardItemShowNextLineEvent
    from "../../../gen/card/events/AbstractShowNextCardItemShowNextLineEvent";
import AppUtils from "../../app/AppUtils";

export default class ShowNextCardItemShowNextLineEvent extends AbstractShowNextCardItemShowNextLineEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
