import AbstractShowCorrectMultipleChoiceNotLastEvent from "../../../gen/multiplechoice/events/AbstractShowCorrectMultipleChoiceNotLastEvent";
import AppUtils from "../../app/AppUtils";

export default class ShowCorrectMultipleChoiceNotLastEvent extends AbstractShowCorrectMultipleChoiceNotLastEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
