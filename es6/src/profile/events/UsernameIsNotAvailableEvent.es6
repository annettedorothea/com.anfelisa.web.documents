'use strict';

class UsernameIsNotAvailableEvent extends AbstractUsernameIsNotAvailableEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
