import AbstractOpenCourseSelectionAction from "../../../gen/profile/actions/AbstractOpenCourseSelectionAction";
import CommonView from "../../common/views/CommonView";

export default class OpenCourseSelectionAction extends AbstractOpenCourseSelectionAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
    }

}

/*       S.D.G.       */
