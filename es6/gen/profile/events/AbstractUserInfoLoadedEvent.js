import Event from "../../../gen/ace/Event";

export default class AbstractUserInfoLoadedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.UserInfoLoadedEvent');
    }
}

/*       S.D.G.       */
