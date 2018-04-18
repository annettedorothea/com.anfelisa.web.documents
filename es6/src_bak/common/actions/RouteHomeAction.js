import AbstractRouteHomeAction from "../../../gen/common/actions/AbstractRouteHomeAction";
import CommonView from "../views/CommonView";

export default class RouteHomeAction extends AbstractRouteHomeAction {

    captureActionParam() {
        this.actionParam.username = CommonView.getUsername();
    }

    initActionData() {
    	if (this.actionParam.username) {
			this.actionData.hash = "private";
	   		this.actionData.username = this.actionParam.username;
    	} else {
			this.actionData.hash = "public";
		}
    }

}

/*       S.D.G.       */
