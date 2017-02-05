'use strict';

class DisplayNextQuestionEvent extends AbstractDisplayNextQuestionEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
