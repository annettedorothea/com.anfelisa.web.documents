'use strict';

class UsernameIsAvailableEvent extends AbstractUsernameIsAvailableEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
