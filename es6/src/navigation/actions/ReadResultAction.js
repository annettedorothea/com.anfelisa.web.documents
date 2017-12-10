import AbstractReadResultAction from "../../../gen/navigation/actions/AbstractReadResultAction";
import CommonView from "../../common/views/CommonView";

export default class ReadResultAction extends AbstractReadResultAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
		this.actionParam.language = CommonView.getLanguage();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.language = this.actionParam.language;
		this.actionData.resultId = this.actionParam.resultId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
