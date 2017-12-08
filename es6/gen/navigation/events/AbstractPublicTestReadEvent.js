import Event from "../../../gen/ace/Event";

export default class AbstractPublicTestReadEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.PublicTestReadEvent');
    }
}

/*       S.D.G.       */
