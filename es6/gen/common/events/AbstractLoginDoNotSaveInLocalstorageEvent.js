import Event from "../../../gen/ace/Event";

export default class AbstractLoginDoNotSaveInLocalStorageEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.LoginDoNotSaveInLocalStorageEvent');
    }
}


/*       S.D.G.       */
