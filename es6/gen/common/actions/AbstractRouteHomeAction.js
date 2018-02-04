import Action from "../../ace/Action";
import RouteCommand from "../../../src/common/commands/RouteCommand";

export default class AbstractRouteHomeAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.RouteHomeAction', false);
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
