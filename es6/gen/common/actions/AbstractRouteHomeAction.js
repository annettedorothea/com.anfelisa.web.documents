import Action from "../../ace/Action";
import RouteHomeCommand from "../../../src/common/commands/RouteHomeCommand";

export default class AbstractRouteHomeAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.RouteHomeAction', false);
    }

	getCommand() {
		return new RouteHomeCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
