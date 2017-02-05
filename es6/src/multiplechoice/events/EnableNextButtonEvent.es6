'use strict';

class EnableNextButtonEvent extends AbstractEnableNextButtonEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
