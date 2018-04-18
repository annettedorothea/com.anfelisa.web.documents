import AbstractInitAction from "../../../gen/common/actions/AbstractInitAction";

export default class InitAction extends AbstractInitAction {

    captureActionParam() {
        this.actionParam.hash = window.location.hash.substring(1);
        this.actionParam.username = localStorage.getItem("username");
        this.actionParam.password = localStorage.getItem("password");
        this.actionParam.language = "de";
    }

    initActionData() {
        this.actionData.hash = this.actionParam.hash;
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
        this.actionData.language = this.actionParam.language;
    }

    releaseActionParam() {
        window.location.hash = this.actionParam.hash;
        localStorage.setItem("username", this.actionParam.username);
        localStorage.setItem("password", this.actionParam.password);
        localStorage.setItem("language", this.actionParam.language);
    }

}

/*       S.D.G.       */
