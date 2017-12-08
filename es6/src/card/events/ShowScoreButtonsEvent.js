import AbstractShowScoreButtonsEvent from "../../../gen/card/events/AbstractShowScoreButtonsEvent";

export default class ShowScoreButtonsEvent extends AbstractShowScoreButtonsEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
