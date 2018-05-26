import AbstractCategorySelectedAction from "../../../gen/box/actions/AbstractCategorySelectedAction";

export default class CategorySelectedAction extends AbstractCategorySelectedAction {

    initActionData() {
        this.actionData.categoryId = this.actionParam.categoryId;
    }

}

/*       S.D.G.       */
