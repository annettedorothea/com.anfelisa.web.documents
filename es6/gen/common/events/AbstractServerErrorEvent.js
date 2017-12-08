import Event from "../../../gen/ace/Event";

export default class AbstractServerErrorEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.ServerErrorEvent');
    }
}

/*       S.D.G.       */
