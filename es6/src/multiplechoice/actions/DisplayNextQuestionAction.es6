'use strict';

class DisplayNextQuestionAction extends AbstractDisplayNextQuestionAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData.multipleChoiceId = this.actionParam.multipleChoiceId;
    	// bind action parameters to action data
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
