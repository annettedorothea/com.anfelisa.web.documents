import Event from "../../../gen/ace/Event";

export default class AbstractPublicTestsReadEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.PublicTestsReadEvent');
    }
}

/*       S.D.G.       */
