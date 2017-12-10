import AbstractPasswordsMismatchEvent from "../../../gen/profile/events/AbstractPasswordsMismatchEvent";

export default class PasswordsMismatchEvent extends AbstractPasswordsMismatchEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
