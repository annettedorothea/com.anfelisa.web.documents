import AbstractDeleteCardClickAction from "../../../gen/author/actions/AbstractDeleteCardClickAction";

export default class DeleteCardClickAction extends AbstractDeleteCardClickAction {

    initActionData() {
        this.actionData.cardId = this.actionParam.cardId;
    }

}

/*       S.D.G.       */