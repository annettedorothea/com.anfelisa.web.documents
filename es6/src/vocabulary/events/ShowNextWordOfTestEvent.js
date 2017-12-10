import AbstractShowNextWordOfTestEvent from "../../../gen/vocabulary/events/AbstractShowNextWordOfTestEvent";

export default class ShowNextWordOfTestEvent extends AbstractShowNextWordOfTestEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
