import AbstractCreateCardAction from "../../../gen/author/actions/AbstractCreateCardAction";

export default class CreateCardAction extends AbstractCreateCardAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
        this.actionData.given = this.actionParam.given;
        this.actionData.wanted = this.actionParam.wanted;
        this.actionData.cardIndex = this.actionParam.cardIndex;
        this.actionData.categoryId = this.actionParam.categoryId;
        this.actionData.image = this.actionParam.image;
    }

}

/*       S.D.G.       */
