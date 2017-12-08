import Event from "../../../gen/ace/Event";

export default class AbstractUsernameIsNotAvailableEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.UsernameIsNotAvailableEvent');
    }
}

/*       S.D.G.       */
