import AbstractCreateBoxAction from "../../../gen/box/actions/AbstractCreateBoxAction";

export default class CreateBoxAction extends AbstractCreateBoxAction {

    initActionData() {
        this.actionData.categoryId = this.actionParam.categoryId;
        this.actionData.maxInterval = this.actionParam.maxInterval;
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
    }

}

/*       S.D.G.       */
