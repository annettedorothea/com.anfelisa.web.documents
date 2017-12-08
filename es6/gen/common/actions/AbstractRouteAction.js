import Action from "../../ace/Action";
import RouteCommand from "../../../src/common/commands/RouteCommand";

export default class AbstractRouteAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.RouteAction', false);
    }

	getCommand() {
			return new RouteCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
