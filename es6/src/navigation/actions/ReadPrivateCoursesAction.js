import AbstractReadPrivateCoursesAction from "../../../gen/navigation/actions/AbstractReadPrivateCoursesAction";
import CommonView from "../../common/views/CommonView";

export default class ReadPrivateCoursesAction extends AbstractReadPrivateCoursesAction {

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
