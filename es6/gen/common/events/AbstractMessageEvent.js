import Event from "../../../gen/ace/Event";

export default class AbstractMessageEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.MessageEvent');
    }
}

/*       S.D.G.       */
