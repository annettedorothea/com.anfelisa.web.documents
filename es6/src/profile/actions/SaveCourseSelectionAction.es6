'use strict';

class SaveCourseSelectionAction extends AbstractSaveCourseSelectionAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
		this.actionParam.schema = CommonView.getSchema();
		this.actionParam.courseIdList = $("input:checkbox:checked").map(function() {return this.value;}).get();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.schema = this.actionParam.schema;
        this.actionData.courseIdList = this.actionParam.courseIdList;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
