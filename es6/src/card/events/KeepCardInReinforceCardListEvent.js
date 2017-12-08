import AbstractKeepCardInReinforceCardListEvent from "../../../gen/card/events/AbstractKeepCardInReinforceCardListEvent";

export default class KeepCardInReinforceCardListEvent extends AbstractKeepCardInReinforceCardListEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
