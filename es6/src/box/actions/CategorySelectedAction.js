import AbstractCategorySelectedAction from "../../../gen/box/actions/AbstractCategorySelectedAction";

export default class CategorySelectedAction extends AbstractCategorySelectedAction {

    initActionData() {
        this.actionData.selectedCategoryId = this.actionParam.selectedCategoryId;
    }

}

/*       S.D.G.       */
