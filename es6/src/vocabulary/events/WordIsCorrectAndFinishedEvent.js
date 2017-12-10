import AbstractWordIsCorrectAndFinishedEvent from "../../../gen/vocabulary/events/AbstractWordIsCorrectAndFinishedEvent";

export default class WordIsCorrectAndFinishedEvent extends AbstractWordIsCorrectAndFinishedEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
