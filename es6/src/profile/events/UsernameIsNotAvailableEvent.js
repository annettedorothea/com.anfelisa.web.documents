import AbstractUsernameIsNotAvailableEvent from "../../../gen/profile/events/AbstractUsernameIsNotAvailableEvent";

export default class UsernameIsNotAvailableEvent extends AbstractUsernameIsNotAvailableEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
