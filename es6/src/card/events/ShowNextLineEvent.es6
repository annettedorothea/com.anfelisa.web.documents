'use strict';

class ShowNextLineEvent extends AbstractShowNextLineEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
