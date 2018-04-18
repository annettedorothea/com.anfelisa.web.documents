import AbstractLoadCoursesAction from "../../../gen/profile/actions/AbstractLoadCoursesAction";
import CommonView from "../../common/views/CommonView";

export default class LoadCoursesAction extends AbstractLoadCoursesAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.boxId = this.actionParam.boxId;
    }

}

/*       S.D.G.       */
