import AbstractPasswordsOKEvent from "../../../gen/profile/events/AbstractPasswordsOKEvent";

export default class PasswordsOKEvent extends AbstractPasswordsOKEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
