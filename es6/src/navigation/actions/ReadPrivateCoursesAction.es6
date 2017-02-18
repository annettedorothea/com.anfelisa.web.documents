'use strict';

class ReadPrivateCoursesAction extends AbstractReadPrivateCoursesAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
