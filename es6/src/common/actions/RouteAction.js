import AbstractRouteAction from "../../../gen/common/actions/AbstractRouteAction";

export default class RouteAction extends AbstractRouteAction {

    initActionData() {
        this.actionData.hash = this.actionParam.hash;
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
    }

}

/*       S.D.G.       */
