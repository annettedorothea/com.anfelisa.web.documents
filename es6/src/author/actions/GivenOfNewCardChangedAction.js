import AbstractGivenOfNewCardChangedAction from "../../../gen/author/actions/AbstractGivenOfNewCardChangedAction";

export default class GivenOfNewCardChangedAction extends AbstractGivenOfNewCardChangedAction {

    initActionData() {
        this.actionData.given = this.actionParam.given;
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
        this.actionData.categoryId = this.actionParam.categoryId;
    }

}

/*       S.D.G.       */
