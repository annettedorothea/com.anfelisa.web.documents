import Action from "../../ace/Action";
import RenderHomeCommand from "../../../src/common/commands/RenderHomeCommand";

export default class AbstractRenderHomeAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.RenderHomeAction', false);
    }

	getCommand() {
			return new RenderHomeCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
