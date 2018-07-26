import Event from "../../../gen/ace/Event";

export default class AbstractCheckUsernameAvailableEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.CheckUsernameAvailableEvent');
    }
}


/*       S.D.G.       */
