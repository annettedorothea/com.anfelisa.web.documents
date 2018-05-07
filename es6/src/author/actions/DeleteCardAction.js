import AbstractDeleteCardAction from "../../../gen/author/actions/AbstractDeleteCardAction";

export default class DeleteCardAction extends AbstractDeleteCardAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
        this.actionData.cardId = this.actionParam.cardId;
        this.actionData.parentCategoryId = this.actionParam.parentCategoryId;
    }

}

/*       S.D.G.       */
