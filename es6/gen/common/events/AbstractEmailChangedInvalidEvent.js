import Event from "../../../gen/ace/Event";

export default class AbstractEmailChangedInvalidEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.EmailChangedInvalidEvent');
    }
}


/*       S.D.G.       */
