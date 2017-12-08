import AbstractShowNextLineEvent from "../../../gen/card/events/AbstractShowNextLineEvent";

export default class ShowNextLineEvent extends AbstractShowNextLineEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
