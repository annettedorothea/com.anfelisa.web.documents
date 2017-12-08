import Event from "../../../gen/ace/Event";

export default class AbstractFieldNotEmptyEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.FieldNotEmptyEvent');
    }
}

/*       S.D.G.       */
