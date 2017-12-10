import AbstractCoursesLoadedEvent from "../../../gen/profile/events/AbstractCoursesLoadedEvent";

export default class CoursesLoadedEvent extends AbstractCoursesLoadedEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
