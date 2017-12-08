import AbstractSaveReinforceCardsEvent from "../../../gen/card/events/AbstractSaveReinforceCardsEvent";

export default class SaveReinforceCardsEvent extends AbstractSaveReinforceCardsEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
