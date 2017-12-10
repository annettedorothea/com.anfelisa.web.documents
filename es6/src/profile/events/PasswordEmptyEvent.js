import AbstractPasswordEmptyEvent from "../../../gen/profile/events/AbstractPasswordEmptyEvent";

export default class PasswordEmptyEvent extends AbstractPasswordEmptyEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
