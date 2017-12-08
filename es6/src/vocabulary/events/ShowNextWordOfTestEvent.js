'use strict';

class ShowNextWordOfTestEvent extends AbstractShowNextWordOfTestEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
