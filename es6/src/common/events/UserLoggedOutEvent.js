import AbstractUserLoggedOutEvent from "../../../gen/common/events/AbstractUserLoggedOutEvent";

export default class UserLoggedOutEvent extends AbstractUserLoggedOutEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
