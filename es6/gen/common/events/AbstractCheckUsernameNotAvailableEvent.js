import Event from "../../../gen/ace/Event";

export default class AbstractCheckUsernameNotAvailableEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.CheckUsernameNotAvailableEvent');
    }
}


/*       S.D.G.       */
