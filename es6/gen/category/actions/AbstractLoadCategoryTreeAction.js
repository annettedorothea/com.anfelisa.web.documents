import Action from "../../ace/AsynchronousAction";
import LoadCategoryTreeCommand from "../../../src/category/commands/LoadCategoryTreeCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadCategoryTreeAction extends Action {

    constructor( pathToSelected) {
        super({pathToSelected}, 'category.LoadCategoryTreeAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new LoadCategoryTreeCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
