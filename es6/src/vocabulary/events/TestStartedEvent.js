import AbstractTestStartedEvent from "../../../gen/vocabulary/events/AbstractTestStartedEvent";

export default class TestStartedEvent extends AbstractTestStartedEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
