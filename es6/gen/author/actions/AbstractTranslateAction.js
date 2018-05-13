import Action from "../../ace/AsynchronousAction";
import TranslateCommand from "../../../src/author/commands/TranslateCommand";
import CategoriesView from "../../../src/author/views/CategoriesView";

export default class AbstractTranslateAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.TranslateAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new TranslateCommand(this.actionData);
	}

		preUpdateUI() {
			CategoriesView.displayTranslateSpinner(this.actionParam);
		}
	
		postUpdateUI() {
			CategoriesView.hideTranslateSpinner(this.actionParam);
		}

}

/*       S.D.G.       */
