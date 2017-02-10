'use strict';

class RenderLogoutAction extends AbstractRenderLogoutAction {

    captureActionParam() {
        this.actionParam.username = CommonView.getUsername();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
