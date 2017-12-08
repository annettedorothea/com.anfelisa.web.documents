import AbstractFieldEmptyEvent from "../../../gen/common/events/AbstractFieldEmptyEvent";

export default class FieldEmptyEvent extends AbstractFieldEmptyEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
