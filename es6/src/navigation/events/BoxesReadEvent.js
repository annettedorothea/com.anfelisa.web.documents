import AbstractBoxesReadEvent from "../../../gen/navigation/events/AbstractBoxesReadEvent";

export default class BoxesReadEvent extends AbstractBoxesReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
