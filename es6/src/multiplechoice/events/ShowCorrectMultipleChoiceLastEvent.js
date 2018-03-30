import AbstractShowCorrectMultipleChoiceLastEvent from "../../../gen/multiplechoice/events/AbstractShowCorrectMultipleChoiceLastEvent";
import AppUtils from "../../app/AppUtils";

export default class ShowCorrectMultipleChoiceLastEvent extends AbstractShowCorrectMultipleChoiceLastEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
