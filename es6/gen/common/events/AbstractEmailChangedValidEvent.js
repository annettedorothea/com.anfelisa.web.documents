import Event from "../../../gen/ace/Event";

export default class AbstractEmailChangedValidEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.EmailChangedValidEvent');
    }
}


/*       S.D.G.       */
