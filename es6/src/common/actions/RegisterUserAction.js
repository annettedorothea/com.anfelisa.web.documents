import AbstractRegisterUserAction from "../../../gen/common/actions/AbstractRegisterUserAction";
import * as App from "../../app/App";

export default class RegisterUserAction extends AbstractRegisterUserAction {

    initActionData() {
        this.actionData.username = App.appState.data.username;
        this.actionData.email = App.appState.data.email;
        this.actionData.language = App.appState.language;
    }

}

/*       S.D.G.       */
