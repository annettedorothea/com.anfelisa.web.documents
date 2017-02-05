'use strict';

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
