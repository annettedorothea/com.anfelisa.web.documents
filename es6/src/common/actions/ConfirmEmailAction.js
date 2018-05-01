import AbstractConfirmEmailAction from "../../../gen/common/actions/AbstractConfirmEmailAction";

export default class ConfirmEmailAction extends AbstractConfirmEmailAction {

    initActionData() {
        this.actionData.token = this.actionParam.token;
    }

}

/*       S.D.G.       */
