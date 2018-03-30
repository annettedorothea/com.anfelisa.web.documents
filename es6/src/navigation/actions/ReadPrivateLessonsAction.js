import AbstractReadPrivateLessonsAction from "../../../gen/navigation/actions/AbstractReadPrivateLessonsAction";
import CommonView from "../../common/views/CommonView";

export default class ReadPrivateLessonsAction extends AbstractReadPrivateLessonsAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.courseId = this.actionParam.courseId;
    }

}

/*       S.D.G.       */
