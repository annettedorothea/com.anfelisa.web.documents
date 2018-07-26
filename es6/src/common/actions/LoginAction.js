import AbstractLoginAction from "../../../gen/common/actions/AbstractLoginAction";
import * as App from "../../app/App";

export default class LoginAction extends AbstractLoginAction {

    initActionData() {
        this.actionData.username = App.appState.data.username;
        this.actionData.saveInLocalStorage = App.appState.data.saveInLocalStorage;
    }

}

/*       S.D.G.       */
