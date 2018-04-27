import Action from "../../ace/Action";
import RouteChangedCommand from "../../../src/common/commands/RouteChangedCommand";

export default class AbstractRouteChangedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.RouteChangedAction', false);
    }

	getCommand() {
		return new RouteChangedCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
