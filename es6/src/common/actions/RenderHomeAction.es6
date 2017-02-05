'use strict';

class RenderHomeAction extends AbstractRenderHomeAction {

    captureActionParam() {
        this.actionParam.language = localStorage.language;
    }

    initActionData() {
        this.actionData.language = this.actionParam.language;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
