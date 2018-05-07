import AbstractNameOfNewCategoryChangedAction from "../../../gen/author/actions/AbstractNameOfNewCategoryChangedAction";

export default class NameOfNewCategoryChangedAction extends AbstractNameOfNewCategoryChangedAction {

    initActionData() {
        this.actionData.name = this.actionParam.name;
        this.actionData.categoryList = this.actionParam.categoryList;
    }

}

/*       S.D.G.       */
