'use strict';

class SaveBoxConfigAction extends AbstractSaveBoxConfigAction {

    captureActionParam() {
		this.actionParam.username = localStorage.username;
		this.actionParam.password = localStorage.password;
		this.actionParam.schema = localStorage.schema;
	    var boxId = this.actionParam.boxId;
		this.actionParam.boxOfCourseList = $("select").map(function() { return { autoAdd: this.value, courseId: this.id, boxId: boxId};}).get();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.schema = this.actionParam.schema;
        this.actionData.boxId = this.actionParam.boxId;
        this.actionData.boxOfCourseList = this.actionParam.boxOfCourseList;
    }

    releaseActionParam() {
		localStorage.username = this.actionParam.username;
		localStorage.password = this.actionParam.password;
		localStorage.schema = this.actionParam.schema;
    }
}

/*       S.D.G.       */
