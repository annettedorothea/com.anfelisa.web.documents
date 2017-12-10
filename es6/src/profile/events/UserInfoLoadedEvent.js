import AbstractUserInfoLoadedEvent from "../../../gen/profile/events/AbstractUserInfoLoadedEvent";

export default class UserInfoLoadedEvent extends AbstractUserInfoLoadedEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
