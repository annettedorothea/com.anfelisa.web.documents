import Event from "../../../gen/ace/Event";

export default class AbstractResetPasswordErrorEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.ResetPasswordErrorEvent');
    }
}


/*       S.D.G.       */
