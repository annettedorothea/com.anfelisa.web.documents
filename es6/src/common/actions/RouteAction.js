import AbstractRouteAction from "../../../gen/common/actions/AbstractRouteAction";

class RouteAction extends AbstractRouteAction {

    captureActionParam() {
    }

    initActionData() {
    	this.actionData.hash = this.actionParam.hash;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */