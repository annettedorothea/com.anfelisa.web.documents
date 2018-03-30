import AbstractShowNextCardItemShowNextWordEvent from "../../../gen/card/events/AbstractShowNextCardItemShowNextWordEvent";
import AppUtils from "../../app/AppUtils";

export default class ShowNextCardItemShowNextWordEvent extends AbstractShowNextCardItemShowNextWordEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
