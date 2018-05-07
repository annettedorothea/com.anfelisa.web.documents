import AbstractLoadCardsAction from "../../../gen/author/actions/AbstractLoadCardsAction";

export default class LoadCardsAction extends AbstractLoadCardsAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
        this.actionData.categoryId = this.actionParam.categoryId;
    }

}

/*       S.D.G.       */
