import Event from "../../../gen/ace/Event";

export default class AbstractPrivateCoursesReadEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.PrivateCoursesReadEvent');
    }
}

/*       S.D.G.       */
