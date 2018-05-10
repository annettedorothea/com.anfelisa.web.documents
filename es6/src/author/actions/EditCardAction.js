import AbstractEditCardAction from "../../../gen/author/actions/AbstractEditCardAction";

export default class EditCardAction extends AbstractEditCardAction {

    initActionData() {
        this.actionData.index = this.actionParam.index;
        this.actionData.given = this.actionParam.given;
        this.actionData.wanted = this.actionParam.wanted;
        this.actionData.cardId = this.actionParam.cardId;
    }

}

/*       S.D.G.       */
