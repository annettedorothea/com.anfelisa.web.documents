import AbstractUsernameIsAvailableEvent from "../../../gen/profile/events/AbstractUsernameIsAvailableEvent";

export default class UsernameIsAvailableEvent extends AbstractUsernameIsAvailableEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
