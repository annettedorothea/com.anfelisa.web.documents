import AbstractPublicTestsReadEvent from "../../../gen/navigation/events/AbstractPublicTestsReadEvent";

export default class PublicTestsReadEvent extends AbstractPublicTestsReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
