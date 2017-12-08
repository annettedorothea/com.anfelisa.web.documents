import AbstractPrivateCoursesReadEvent from "../../../gen/navigation/events/AbstractPrivateCoursesReadEvent";

export default class PrivateCoursesReadEvent extends AbstractPrivateCoursesReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
