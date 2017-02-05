'use strict';

class OpenReallyDeleteDialogAction extends AbstractOpenReallyDeleteDialogAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData = JSON.parse(JSON.stringify(this.actionParam));
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
