import AbstractNameOfEditedCategoryChangedAction from "../../../gen/author/actions/AbstractNameOfEditedCategoryChangedAction";

export default class NameOfEditedCategoryChangedAction extends AbstractNameOfEditedCategoryChangedAction {

    initActionData() {
        this.actionData.name = this.actionParam.name;
        this.actionData.categoryList = this.actionParam.categoryList;
    }

}

/*       S.D.G.       */
