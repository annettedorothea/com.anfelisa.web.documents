'use strict';

class UserLoggedInEvent extends AbstractUserLoggedInEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
