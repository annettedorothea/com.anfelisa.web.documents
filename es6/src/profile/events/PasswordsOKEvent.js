'use strict';

class PasswordsOKEvent extends AbstractPasswordsOKEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
