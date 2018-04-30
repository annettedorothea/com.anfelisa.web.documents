import AbstractRouteChangedAction from "../../../gen/common/actions/AbstractRouteChangedAction";

export default class RouteChangedAction extends AbstractRouteChangedAction {

    initActionData() {
        this.actionData.hash = this.actionParam.hash;
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
    }

}

/*       S.D.G.       */
