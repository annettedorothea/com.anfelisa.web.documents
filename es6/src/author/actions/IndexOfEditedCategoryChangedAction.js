import AbstractIndexOfEditedCategoryChangedAction from "../../../gen/author/actions/AbstractIndexOfEditedCategoryChangedAction";

export default class IndexOfEditedCategoryChangedAction extends AbstractIndexOfEditedCategoryChangedAction {

    initActionData() {
        this.actionData.index = this.actionParam.index;
    }

}

/*       S.D.G.       */
