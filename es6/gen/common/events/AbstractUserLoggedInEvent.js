import Event from "../../../gen/ace/Event";

export default class AbstractUserLoggedInEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.UserLoggedInEvent');
    }
}

/*       S.D.G.       */
