'use strict';

class ShowScoreButtonsEvent extends AbstractShowScoreButtonsEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
