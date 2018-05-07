import AbstractIndexOfEditedCardChangedAction from "../../../gen/author/actions/AbstractIndexOfEditedCardChangedAction";

export default class IndexOfEditedCardChangedAction extends AbstractIndexOfEditedCardChangedAction {

    initActionData() {
        this.actionData.index = this.actionParam.index;
    }

}

/*       S.D.G.       */
