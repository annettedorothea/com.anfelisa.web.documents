import AbstractShowNextWordEvent from "../../../gen/card/events/AbstractShowNextWordEvent";

export default class ShowNextWordEvent extends AbstractShowNextWordEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
