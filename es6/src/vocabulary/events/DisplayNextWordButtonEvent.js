import AbstractDisplayNextWordButtonEvent from "../../../gen/vocabulary/events/AbstractDisplayNextWordButtonEvent";

export default class DisplayNextWordButtonEvent extends AbstractDisplayNextWordButtonEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
