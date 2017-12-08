import AbstractDisplayNextReinforceCardEvent from "../../../gen/card/events/AbstractDisplayNextReinforceCardEvent";

export default class DisplayNextReinforceCardEvent extends AbstractDisplayNextReinforceCardEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
