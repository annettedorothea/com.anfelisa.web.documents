'use strict';

class WordIsCorrectAndNotFinishedEvent extends AbstractWordIsCorrectAndNotFinishedEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
