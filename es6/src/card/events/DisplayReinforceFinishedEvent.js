import AbstractDisplayReinforceFinishedEvent from "../../../gen/card/events/AbstractDisplayReinforceFinishedEvent";

export default class DisplayReinforceFinishedEvent extends AbstractDisplayReinforceFinishedEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
