import Event from "../../../gen/ace/Event";

export default class AbstractFieldEmptyEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.FieldEmptyEvent');
    }
}

/*       S.D.G.       */
