'use strict';

class ShowNextWordEvent extends AbstractShowNextWordEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
