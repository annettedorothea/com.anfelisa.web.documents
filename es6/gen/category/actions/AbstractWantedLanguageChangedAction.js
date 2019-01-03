import Action from "../../ace/SynchronousAction";
import WantedLanguageChangedCommand from "../../../src/category/commands/WantedLanguageChangedCommand";

export default class AbstractWantedLanguageChangedAction extends Action {

    constructor( wantedLanguage) {
        super({wantedLanguage}, 'category.WantedLanguageChangedAction');
    }
    
	getCommand() {
		return new WantedLanguageChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
