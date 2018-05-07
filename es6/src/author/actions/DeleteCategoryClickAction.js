import AbstractDeleteCategoryClickAction from "../../../gen/author/actions/AbstractDeleteCategoryClickAction";

export default class DeleteCategoryClickAction extends AbstractDeleteCategoryClickAction {

    initActionData() {
        this.actionData.categoryId = this.actionParam.categoryId;
    }

}

/*       S.D.G.       */
