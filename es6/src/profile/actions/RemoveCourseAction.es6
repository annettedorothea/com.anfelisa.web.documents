'use strict';

class RemoveCourseAction extends AbstractRemoveCourseAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
		this.actionParam.schema = CommonView.getSchema();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.schema = this.actionParam.schema;
		this.actionData.courseId = this.actionParam.courseId;
    }

    releaseActionParam() {
		bootbox.hideAll();
    }
}

/*       S.D.G.       */
