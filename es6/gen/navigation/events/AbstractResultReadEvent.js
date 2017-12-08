import Event from "../../../gen/ace/Event";

export default class AbstractResultReadEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ResultReadEvent');
    }
}

/*       S.D.G.       */
