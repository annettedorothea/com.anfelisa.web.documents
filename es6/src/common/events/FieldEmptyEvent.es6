'use strict';

class FieldEmptyEvent extends AbstractFieldEmptyEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
