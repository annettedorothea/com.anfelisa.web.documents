import AbstractLoadDashboardAction from "../../../gen/common/actions/AbstractLoadDashboardAction";

export default class LoadDashboardAction extends AbstractLoadDashboardAction {

    initActionData() {
        this.actionData.username = localStorage.getItem("username");
        this.actionData.password = localStorage.getItem("password");
    }

}

/*       S.D.G.       */
