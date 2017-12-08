import AbstractRemoveCardFromReinforceCardListEvent from "../../../gen/card/events/AbstractRemoveCardFromReinforceCardListEvent";

export default class RemoveCardFromReinforceCardListEvent extends AbstractRemoveCardFromReinforceCardListEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
