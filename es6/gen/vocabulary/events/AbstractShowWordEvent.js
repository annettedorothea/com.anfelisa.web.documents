import Event from "../../../gen/ace/Event";

export default class AbstractShowWordEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'vocabulary.ShowWordEvent');
    }
}

/*       S.D.G.       */
