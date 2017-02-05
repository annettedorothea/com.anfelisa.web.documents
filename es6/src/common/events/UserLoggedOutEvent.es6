'use strict';

class UserLoggedOutEvent extends AbstractUserLoggedOutEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
