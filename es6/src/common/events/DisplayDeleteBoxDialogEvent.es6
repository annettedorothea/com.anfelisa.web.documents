'use strict';

class DisplayDeleteBoxDialogEvent extends AbstractDisplayDeleteBoxDialogEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
