import AbstractPublicCoursesReadEvent from "../../../gen/navigation/events/AbstractPublicCoursesReadEvent";

export default class PublicCoursesReadEvent extends AbstractPublicCoursesReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
