import AbstractDisplayNextQuestionEvent from "../../../gen/multiplechoice/events/AbstractDisplayNextQuestionEvent";

export default class DisplayNextQuestionEvent extends AbstractDisplayNextQuestionEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
