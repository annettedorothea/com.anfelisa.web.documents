import AbstractDisplayNextQuestionGoEvent from "../../../gen/multiplechoice/events/AbstractDisplayNextQuestionGoEvent";
import AppUtils from "../../app/AppUtils";

export default class DisplayNextQuestionGoEvent extends AbstractDisplayNextQuestionGoEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
