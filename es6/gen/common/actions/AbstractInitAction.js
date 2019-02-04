import Action from "../../ace/SynchronousAction";
import InitCommand from "../../../src/common/commands/InitCommand";

export default class AbstractInitAction extends Action {

    constructor( hash, username, password) {
        super({hash, username, password}, 'common.InitAction');
    }
    
	getCommand() {
		return new InitCommand(this.actionData);
	}


}

/*       S.D.G.       */
