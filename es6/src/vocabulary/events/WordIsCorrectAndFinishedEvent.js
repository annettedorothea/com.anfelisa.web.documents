'use strict';

class WordIsCorrectAndFinishedEvent extends AbstractWordIsCorrectAndFinishedEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
