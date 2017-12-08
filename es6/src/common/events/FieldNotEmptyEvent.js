import AbstractFieldNotEmptyEvent from "../../../gen/common/events/AbstractFieldNotEmptyEvent";

export default class FieldNotEmptyEvent extends AbstractFieldNotEmptyEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
