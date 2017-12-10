import AbstractWordIsNotCorrectEvent from "../../../gen/vocabulary/events/AbstractWordIsNotCorrectEvent";

export default class WordIsNotCorrectEvent extends AbstractWordIsNotCorrectEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
