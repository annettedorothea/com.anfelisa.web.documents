import AbstractShowCorrectMultipleChoiceEvent from "../../../gen/multiplechoice/events/AbstractShowCorrectMultipleChoiceEvent";

export default class ShowCorrectMultipleChoiceEvent extends AbstractShowCorrectMultipleChoiceEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
