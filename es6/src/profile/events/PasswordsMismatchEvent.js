'use strict';

class PasswordsMismatchEvent extends AbstractPasswordsMismatchEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
