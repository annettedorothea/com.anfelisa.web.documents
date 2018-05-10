import AbstractUpdateCardAction from "../../../gen/author/actions/AbstractUpdateCardAction";

export default class UpdateCardAction extends AbstractUpdateCardAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
        this.actionData.cardId = this.actionParam.cardId;
        this.actionData.given = this.actionParam.given;
        this.actionData.wanted = this.actionParam.wanted;
        this.actionData.cardIndex = this.actionParam.cardIndex;
        this.actionData.categoryId = this.actionParam.categoryId;
    }

}

/*       S.D.G.       */
