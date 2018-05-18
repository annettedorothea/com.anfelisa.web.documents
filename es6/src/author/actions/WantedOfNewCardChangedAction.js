import AbstractWantedOfNewCardChangedAction from "../../../gen/author/actions/AbstractWantedOfNewCardChangedAction";

export default class WantedOfNewCardChangedAction extends AbstractWantedOfNewCardChangedAction {

    initActionData() {
        this.actionData.wanted = this.actionParam.wanted;
        this.actionData.given = this.actionParam.given;
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
        this.actionData.categoryId = this.actionParam.categoryId;
        this.actionData.naturalInputOrder = this.actionParam.naturalInputOrder;
    }

}

/*       S.D.G.       */
