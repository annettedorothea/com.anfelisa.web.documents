import Action from "../../ace/SynchronousAction";
import GivenLanguageChangedCommand from "../../../src/category/commands/GivenLanguageChangedCommand";

export default class AbstractGivenLanguageChangedAction extends Action {

    constructor( givenLanguage) {
        super({givenLanguage}, 'category.GivenLanguageChangedAction');
    }
    
	getCommand() {
		return new GivenLanguageChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
