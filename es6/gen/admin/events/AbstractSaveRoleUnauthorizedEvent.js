import Event from "../../../gen/ace/Event";

export default class AbstractSaveRoleUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'admin.SaveRoleUnauthorizedEvent');
    }
}


/*       S.D.G.       */
