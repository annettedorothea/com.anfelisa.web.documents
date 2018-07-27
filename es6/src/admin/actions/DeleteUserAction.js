import AbstractDeleteUserAction from "../../../gen/admin/actions/AbstractDeleteUserAction";
import * as App from "../../app/App";

export default class DeleteUserAction extends AbstractDeleteUserAction {

    initActionData() {
        this.actionData.usernameToBeDeleted = App.appState.data.usernameToBeDeleted;
    }

}

/*       S.D.G.       */
