import AbstractPrivateLessonsReadEvent from "../../../gen/navigation/events/AbstractPrivateLessonsReadEvent";

export default class PrivateLessonsReadEvent extends AbstractPrivateLessonsReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
