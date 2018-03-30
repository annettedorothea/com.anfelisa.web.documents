import AbstractReadPrivateTestsAction from "../../../gen/navigation/actions/AbstractReadPrivateTestsAction";
import CommonView from "../../common/views/CommonView";

export default class ReadPrivateTestsAction extends AbstractReadPrivateTestsAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.lessonId = this.actionParam.lessonId;
    }

}

/*       S.D.G.       */
