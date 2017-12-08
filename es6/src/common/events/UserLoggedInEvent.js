import AbstractUserLoggedInEvent from "../../../gen/common/events/AbstractUserLoggedInEvent";

export default class UserLoggedInEvent extends AbstractUserLoggedInEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
