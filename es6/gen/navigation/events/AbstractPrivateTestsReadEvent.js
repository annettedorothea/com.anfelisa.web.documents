import Event from "../../../gen/ace/Event";

export default class AbstractPrivateTestsReadEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.PrivateTestsReadEvent');
    }
}

/*       S.D.G.       */
