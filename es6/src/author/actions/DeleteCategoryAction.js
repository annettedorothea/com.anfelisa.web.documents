import AbstractDeleteCategoryAction from "../../../gen/author/actions/AbstractDeleteCategoryAction";

export default class DeleteCategoryAction extends AbstractDeleteCategoryAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
        this.actionData.categoryId = this.actionParam.categoryId;
        this.actionData.parentCategoryId = this.actionParam.parentCategoryId;
    }

}

/*       S.D.G.       */
