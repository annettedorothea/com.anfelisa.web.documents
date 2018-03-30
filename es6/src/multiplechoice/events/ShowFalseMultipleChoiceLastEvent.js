import AbstractShowFalseMultipleChoiceLastEvent from "../../../gen/multiplechoice/events/AbstractShowFalseMultipleChoiceLastEvent";
import AppUtils from "../../app/AppUtils";

export default class ShowFalseMultipleChoiceLastEvent extends AbstractShowFalseMultipleChoiceLastEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
