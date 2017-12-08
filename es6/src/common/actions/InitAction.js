import AbstractInitAction from "../../../gen/common/actions/AbstractInitAction";

class InitAction extends AbstractInitAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
		this.actionParam.language = CommonView.getLanguage();
		this.actionParam.hash = window.location.hash.substring(1);
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.language = this.actionParam.language;
		this.actionData.hash = this.actionParam.hash;
    }

    releaseActionParam() {
		window.location.hash = this.actionParam.hash;
    }
}

/*       S.D.G.       */
