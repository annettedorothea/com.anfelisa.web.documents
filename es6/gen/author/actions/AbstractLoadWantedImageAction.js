import Action from "../../ace/AsynchronousAction";
import LoadWantedImageCommand from "../../../src/author/commands/LoadWantedImageCommand";
import CategoriesView from "../../../src/author/views/CategoriesView";

export default class AbstractLoadWantedImageAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.LoadWantedImageAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new LoadWantedImageCommand(this.actionData);
	}

		preUpdateUI() {
			CategoriesView.displayUploadSpinner(this.actionParam);
		}
	
		postUpdateUI() {
			CategoriesView.hideUploadSpinner(this.actionParam);
		}

}

/*       S.D.G.       */
