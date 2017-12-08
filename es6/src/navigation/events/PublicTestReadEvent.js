import AbstractPublicTestReadEvent from "../../../gen/navigation/events/AbstractPublicTestReadEvent";

export default class PublicTestReadEvent extends AbstractPublicTestReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
