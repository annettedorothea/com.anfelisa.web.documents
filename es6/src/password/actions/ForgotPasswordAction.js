import AbstractForgotPasswordAction from "../../../gen/password/actions/AbstractForgotPasswordAction";
import * as App from "../../app/App";

export default class ForgotPasswordAction extends AbstractForgotPasswordAction {

    initActionData() {
        this.actionData.username = App.appState.data.username;
        this.actionData.language = App.appState.language;
    }

}

/*       S.D.G.       */
