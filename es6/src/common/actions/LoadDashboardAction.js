import AbstractLoadDashboardAction from "../../../gen/common/actions/AbstractLoadDashboardAction";

export default class LoadDashboardAction extends AbstractLoadDashboardAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
    }

}

/*       S.D.G.       */
