import AbstractPrivateTestReadEvent from "../../../gen/navigation/events/AbstractPrivateTestReadEvent";

export default class PrivateTestReadEvent extends AbstractPrivateTestReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
