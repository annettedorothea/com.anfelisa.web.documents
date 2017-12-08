'use strict';

class RemoveCourseAction extends AbstractRemoveCourseAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.courseId = this.actionParam.courseId;
    }

    releaseActionParam() {
		bootbox.hideAll();
    }
}

/*       S.D.G.       */
