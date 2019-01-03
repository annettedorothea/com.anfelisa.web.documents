import Action from "../../ace/AsynchronousAction";
import CreateCategoryCommand from "../../../src/category/commands/CreateCategoryCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractCreateCategoryAction extends Action {

    constructor() {
        super({}, 'category.CreateCategoryAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new CreateCategoryCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
