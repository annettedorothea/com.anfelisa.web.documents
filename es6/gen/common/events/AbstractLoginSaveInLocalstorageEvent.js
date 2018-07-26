import Event from "../../../gen/ace/Event";

export default class AbstractLoginSaveInLocalStorageEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.LoginSaveInLocalStorageEvent');
    }
}


/*       S.D.G.       */
