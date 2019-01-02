import Action from "../../ace/SynchronousAction";
import ToggleSaveInLocalStorageCommand from "../../../src/login/commands/ToggleSaveInLocalStorageCommand";

export default class AbstractToggleSaveInLocalStorageAction extends Action {

    constructor( saveInLocalStorage) {
        super({saveInLocalStorage}, 'login.ToggleSaveInLocalStorageAction');
    }
    
	getCommand() {
		return new ToggleSaveInLocalStorageCommand(this.actionData);
	}


}

/*       S.D.G.       */
