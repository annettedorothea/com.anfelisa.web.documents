import Action from "../../ace/AsynchronousAction";
import TranslateCommand from "../../../src/author/commands/TranslateCommand";
import CategoriesView from "../../../src/author/views/CategoriesView";

export default class AbstractTranslateAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.TranslateAction', false, false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new TranslateCommand(this.actionData);
	}

		preUpdateUI() {
			CategoriesView.displayTranslateSpinner(this.actionData);
		}
	
		postUpdateUI() {
			CategoriesView.hideTranslateSpinner(this.actionData);
		}

}

/*       S.D.G.       */
