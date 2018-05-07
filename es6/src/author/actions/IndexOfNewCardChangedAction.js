import AbstractIndexOfNewCardChangedAction from "../../../gen/author/actions/AbstractIndexOfNewCardChangedAction";

export default class IndexOfNewCardChangedAction extends AbstractIndexOfNewCardChangedAction {

    initActionData() {
        this.actionData.index = this.actionParam.index;
    }

}

/*       S.D.G.       */
