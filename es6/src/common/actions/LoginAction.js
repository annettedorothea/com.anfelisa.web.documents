import AbstractLoginAction from "../../../gen/common/actions/AbstractLoginAction";

class LoginAction extends AbstractLoginAction {

    captureActionParam() {
		this.actionParam.username = $(".username").val();
		let password = $(".password").val();
        this.actionParam.password = CryptoJS.MD5(password).toString();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.role = this.actionParam.role;
    }

    releaseActionParam() {
		$(".username").val(this.actionParam.username);
		$(".password").val(this.actionParam.password);
    }
}

/*       S.D.G.       */
