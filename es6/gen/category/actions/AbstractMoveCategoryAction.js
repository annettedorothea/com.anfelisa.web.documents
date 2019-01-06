import Action from "../../ace/AsynchronousAction";
import MoveCategoryCommand from "../../../src/category/commands/MoveCategoryCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractMoveCategoryAction extends Action {

    constructor() {
        super({}, 'category.MoveCategoryAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new MoveCategoryCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
