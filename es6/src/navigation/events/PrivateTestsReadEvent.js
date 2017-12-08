import AbstractPrivateTestsReadEvent from "../../../gen/navigation/events/AbstractPrivateTestsReadEvent";

export default class PrivateTestsReadEvent extends AbstractPrivateTestsReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
