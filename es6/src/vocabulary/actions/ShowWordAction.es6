'use strict';

class ShowWordAction extends AbstractShowWordAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData.solution = jQuery(".active").next().html();
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
