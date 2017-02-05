'use strict';

class ShowCorrectMultipleChoiceEvent extends AbstractShowCorrectMultipleChoiceEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
