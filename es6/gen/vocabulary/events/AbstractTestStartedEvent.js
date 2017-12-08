import Event from "../../../gen/ace/Event";

export default class AbstractTestStartedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'vocabulary.TestStartedEvent');
    }
}

/*       S.D.G.       */
