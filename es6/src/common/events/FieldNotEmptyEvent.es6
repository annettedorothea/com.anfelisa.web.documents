'use strict';

class FieldNotEmptyEvent extends AbstractFieldNotEmptyEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
