import AbstractWordIsCorrectAndNotFinishedEvent from "../../../gen/vocabulary/events/AbstractWordIsCorrectAndNotFinishedEvent";

export default class WordIsCorrectAndNotFinishedEvent extends AbstractWordIsCorrectAndNotFinishedEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
