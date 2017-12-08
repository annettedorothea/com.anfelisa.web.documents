import Event from "../../../gen/ace/Event";

export default class AbstractUserLoggedOutEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.UserLoggedOutEvent');
    }
}

/*       S.D.G.       */
