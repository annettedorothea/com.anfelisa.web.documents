'use strict';

class SwitchLanguageEvent extends AbstractSwitchLanguageEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
