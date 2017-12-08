import AbstractDisplayRemoveCardFromBoxDialogEvent from "../../../gen/common/events/AbstractDisplayRemoveCardFromBoxDialogEvent";

export default class DisplayRemoveCardFromBoxDialogEvent extends AbstractDisplayRemoveCardFromBoxDialogEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
