import Event from "../../../gen/ace/Event";

export default class AbstractPrivateTestReadEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.PrivateTestReadEvent');
    }
}

/*       S.D.G.       */
