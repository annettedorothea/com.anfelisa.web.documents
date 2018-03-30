import AbstractConfirmEmailAction from "../../../gen/profile/actions/AbstractConfirmEmailAction";

export default class ConfirmEmailAction extends AbstractConfirmEmailAction {

    initActionData() {
   		this.actionData.username = this.actionParam.username;
   		this.actionData.password = this.actionParam.password;
    }

}

/*       S.D.G.       */
