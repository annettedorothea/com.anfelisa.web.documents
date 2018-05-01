import AbstractUpdateCategoryAction from "../../../gen/author/actions/AbstractUpdateCategoryAction";

export default class UpdateCategoryAction extends AbstractUpdateCategoryAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
        this.actionData.categoryId = this.actionParam.categoryId;
        this.actionData.categoryName = this.actionParam.categoryName;
        this.actionData.categoryIndex = this.actionParam.categoryIndex;
        this.actionData.parentCategoryId = this.actionParam.parentCategoryId;
    }

}

/*       S.D.G.       */
