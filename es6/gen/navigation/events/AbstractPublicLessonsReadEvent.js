import Event from "../../../gen/ace/Event";

export default class AbstractPublicLessonsReadEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.PublicLessonsReadEvent');
    }
}

/*       S.D.G.       */
