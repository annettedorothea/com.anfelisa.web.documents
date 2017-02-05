'use strict';

class WordIsNotCorrectEvent extends AbstractWordIsNotCorrectEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
