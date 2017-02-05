'use strict';

class RouteHomeAction extends AbstractRouteHomeAction {

    captureActionParam() {
        this.actionParam.username = localStorage.username;
    }

    initActionData() {
    	if (this.actionParam.username) {
			this.actionData.hash = "private";
	   		this.actionData.username = this.actionParam.username;
    	} else {
			this.actionData.hash = "public";
		}
    }

    releaseActionParam() {
   		localStorage.username = this.actionParam.username;
    }
}

/*       S.D.G.       */
