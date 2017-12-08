'use strict';

class PasswordEmptyEvent extends AbstractPasswordEmptyEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
