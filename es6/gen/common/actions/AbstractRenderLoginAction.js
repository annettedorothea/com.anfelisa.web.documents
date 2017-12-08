import Action from "../../ace/Action";
import RenderLoginCommand from "../../../src/common/commands/RenderLoginCommand";

export default class AbstractRenderLoginAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.RenderLoginAction', false);
    }

	getCommand() {
			return new RenderLoginCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
