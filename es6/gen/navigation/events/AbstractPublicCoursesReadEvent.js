import Event from "../../../gen/ace/Event";

export default class AbstractPublicCoursesReadEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.PublicCoursesReadEvent');
    }
}

/*       S.D.G.       */
