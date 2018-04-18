import AbstractCheckUsernameAction from "../../../gen/common/actions/AbstractCheckUsernameAction";

export default class CheckUsernameAction extends AbstractCheckUsernameAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
    }

}

/*       S.D.G.       */
