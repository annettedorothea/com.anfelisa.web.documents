import Event from "../../../gen/ace/Event";

export default class AbstractInitNoUserEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.InitNoUserEvent');
    }
}


/*       S.D.G.       */
