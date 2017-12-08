import AbstractShowFalseMultipleChoiceEvent from "../../../gen/multiplechoice/events/AbstractShowFalseMultipleChoiceEvent";

export default class ShowFalseMultipleChoiceEvent extends AbstractShowFalseMultipleChoiceEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
