import Action from "../../ace/AsynchronousAction";
import DeleteCategoryCommand from "../../../src/category/commands/DeleteCategoryCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractDeleteCategoryAction extends Action {

    constructor() {
        super({}, 'category.DeleteCategoryAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new DeleteCategoryCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
