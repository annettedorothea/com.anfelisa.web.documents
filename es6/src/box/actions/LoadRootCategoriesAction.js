import AbstractLoadRootCategoriesAction from "../../../gen/box/actions/AbstractLoadRootCategoriesAction";

export default class LoadRootCategoriesAction extends AbstractLoadRootCategoriesAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
    }

}

/*       S.D.G.       */
