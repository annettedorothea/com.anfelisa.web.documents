import AbstractShowFalseMultipleChoiceNotLastEvent from "../../../gen/multiplechoice/events/AbstractShowFalseMultipleChoiceNotLastEvent";
import AppUtils from "../../app/AppUtils";

export default class ShowFalseMultipleChoiceNotLastEvent extends AbstractShowFalseMultipleChoiceNotLastEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
