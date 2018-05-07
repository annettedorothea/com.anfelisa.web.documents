import AbstractGivenOfNewCardChangedAction from "../../../gen/author/actions/AbstractGivenOfNewCardChangedAction";

export default class GivenOfNewCardChangedAction extends AbstractGivenOfNewCardChangedAction {

    initActionData() {
        this.actionData.given = this.actionParam.given;
    }

}

/*       S.D.G.       */
