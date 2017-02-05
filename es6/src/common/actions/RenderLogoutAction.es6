'use strict';

class RenderLogoutAction extends AbstractRenderLogoutAction {

    captureActionParam() {
        this.actionParam.username = localStorage.username;
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
    }

    releaseActionParam() {
   		localStorage.username = this.actionParam.username;
    }
}

/*       S.D.G.       */
