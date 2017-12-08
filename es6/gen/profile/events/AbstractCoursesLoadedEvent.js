import Event from "../../../gen/ace/Event";

export default class AbstractCoursesLoadedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.CoursesLoadedEvent');
    }
}

/*       S.D.G.       */
