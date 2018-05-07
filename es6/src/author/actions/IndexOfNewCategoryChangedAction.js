import AbstractIndexOfNewCategoryChangedAction from "../../../gen/author/actions/AbstractIndexOfNewCategoryChangedAction";

export default class IndexOfNewCategoryChangedAction extends AbstractIndexOfNewCategoryChangedAction {

    initActionData() {
        this.actionData.index = this.actionParam.index;
    }

}

/*       S.D.G.       */
