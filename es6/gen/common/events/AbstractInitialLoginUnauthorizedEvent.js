import Event from "../../../gen/ace/Event";

export default class AbstractInitialLoginUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.InitialLoginUnauthorizedEvent');
    }
}


/*       S.D.G.       */
