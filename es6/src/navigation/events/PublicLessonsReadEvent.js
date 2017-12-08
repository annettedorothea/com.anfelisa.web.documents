import AbstractPublicLessonsReadEvent from "../../../gen/navigation/events/AbstractPublicLessonsReadEvent";

export default class PublicLessonsReadEvent extends AbstractPublicLessonsReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
