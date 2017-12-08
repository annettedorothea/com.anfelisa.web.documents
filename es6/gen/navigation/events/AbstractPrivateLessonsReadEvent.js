import Event from "../../../gen/ace/Event";

export default class AbstractPrivateLessonsReadEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.PrivateLessonsReadEvent');
    }
}

/*       S.D.G.       */
