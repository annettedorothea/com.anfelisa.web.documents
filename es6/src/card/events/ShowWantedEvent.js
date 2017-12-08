import AbstractShowWantedEvent from "../../../gen/card/events/AbstractShowWantedEvent";

export default class ShowWantedEvent extends AbstractShowWantedEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
