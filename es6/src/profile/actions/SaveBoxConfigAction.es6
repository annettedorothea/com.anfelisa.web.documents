'use strict';

class SaveBoxConfigAction extends AbstractSaveBoxConfigAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
	    var boxId = this.actionParam.boxId;
		this.actionParam.boxOfCourseList = $("select").map(function() { return { autoAdd: this.value, courseId: this.id, boxId: boxId};}).get();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
        this.actionData.boxId = this.actionParam.boxId;
        this.actionData.boxOfCourseList = this.actionParam.boxOfCourseList;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
