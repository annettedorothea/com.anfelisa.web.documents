import AbstractDeleteBoxAction from "../../../gen/box/actions/AbstractDeleteBoxAction";

export default class DeleteBoxAction extends AbstractDeleteBoxAction {

    initActionData() {
        this.actionData.boxId = this.actionParam.boxId;
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
    }

}

/*       S.D.G.       */
