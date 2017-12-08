import Event from "../../../gen/ace/Event";

export default class AbstractErrorEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.ErrorEvent');
    }
}

/*       S.D.G.       */
