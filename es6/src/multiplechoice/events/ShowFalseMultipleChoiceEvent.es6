'use strict';

class ShowFalseMultipleChoiceEvent extends AbstractShowFalseMultipleChoiceEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
