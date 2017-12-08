import Action from "../../ace/Action";
import RenderLogoutCommand from "../../../src/common/commands/RenderLogoutCommand";

export default class AbstractRenderLogoutAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.RenderLogoutAction', false);
    }

	getCommand() {
			return new RenderLogoutCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
