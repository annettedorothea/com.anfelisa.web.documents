'use strict';

class LoginAction extends AbstractLoginAction {

    captureActionParam() {
		this.actionParam.username = $(".username").val();
		var password = $(".password").val();
		this.actionParam.password = CryptoJS.MD5(password).toString(CryptoJS.enc.Base64);
		this.actionParam.schema = localStorage.schema;
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.schema = this.actionParam.schema;
		this.actionData.role = this.actionParam.role;
    }

    releaseActionParam() {
		$(".username").val(this.actionParam.username);
		$(".password").val(this.actionParam.password);
		localStorage.schema = this.actionParam.schema;
		localStorage.role = this.actionParam.role;
    }
}

/*       S.D.G.       */
