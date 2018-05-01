import AbstractLoadCategoriesAction from "../../../gen/author/actions/AbstractLoadCategoriesAction";

export default class LoadCategoriesAction extends AbstractLoadCategoriesAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
        this.actionData.parentCategoryId = this.actionParam.parentCategoryId;
    }

}

/*       S.D.G.       */
