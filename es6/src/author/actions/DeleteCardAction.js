import AbstractDeleteCardAction from "../../../gen/author/actions/AbstractDeleteCardAction";

export default class DeleteCardAction extends AbstractDeleteCardAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
        this.actionData.cardId = this.actionParam.cardId;
        this.actionData.categoryId = this.actionParam.categoryId;
    }

}

/*       S.D.G.       */
