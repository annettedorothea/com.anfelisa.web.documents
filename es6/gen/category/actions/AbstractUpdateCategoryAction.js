import Action from "../../ace/AsynchronousAction";
import UpdateCategoryCommand from "../../../src/category/commands/UpdateCategoryCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractUpdateCategoryAction extends Action {

    constructor() {
        super({}, 'category.UpdateCategoryAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new UpdateCategoryCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
