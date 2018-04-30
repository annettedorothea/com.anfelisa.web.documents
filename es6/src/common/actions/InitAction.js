import AbstractInitAction from "../../../gen/common/actions/AbstractInitAction";

export default class InitAction extends AbstractInitAction {

    captureActionParam() {
        this.actionParam.username = localStorage.getItem("username");
        this.actionParam.password = localStorage.getItem("password");
        this.actionParam.language = "de";
    }

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
        this.actionData.language = this.actionParam.language;
        this.actionData.hash = this.actionParam.hash;
    }

    releaseActionParam() {
        localStorage.setItem("username", this.actionParam.username);
        localStorage.setItem("password", this.actionParam.password);
        localStorage.setItem("language", this.actionParam.language);
    }

}

/*       S.D.G.       */
