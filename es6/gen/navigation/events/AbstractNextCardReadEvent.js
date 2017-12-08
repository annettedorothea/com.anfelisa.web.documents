import Event from "../../../gen/ace/Event";

export default class AbstractNextCardReadEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.NextCardReadEvent');
    }
}

/*       S.D.G.       */
