import AbstractGivenOfEditedCardChangedAction from "../../../gen/author/actions/AbstractGivenOfEditedCardChangedAction";

export default class GivenOfEditedCardChangedAction extends AbstractGivenOfEditedCardChangedAction {

    initActionData() {
        this.actionData.given = this.actionParam.given;
    }

}

/*       S.D.G.       */
