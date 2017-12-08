import Event from "../../../gen/ace/Event";

export default class AbstractUsernameIsAvailableEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.UsernameIsAvailableEvent');
    }
}

/*       S.D.G.       */
