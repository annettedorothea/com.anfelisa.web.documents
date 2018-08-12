import AbstractRegisterUserAction from "../../../gen/registration/actions/AbstractRegisterUserAction";
import * as App from "../../app/App";

export default class RegisterUserAction extends AbstractRegisterUserAction {

    initActionData() {
        this.actionData.email = App.appState.data.email;
        this.actionData.language = App.appState.language;
    }

}

/*       S.D.G.       */
