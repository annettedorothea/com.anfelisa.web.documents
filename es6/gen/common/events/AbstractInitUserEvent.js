import Event from "../../../gen/ace/Event";

export default class AbstractInitUserEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.InitUserEvent');
    }
}


/*       S.D.G.       */
