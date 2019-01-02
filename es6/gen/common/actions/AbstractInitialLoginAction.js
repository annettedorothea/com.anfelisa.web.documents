import Action from "../../ace/AsynchronousAction";
import InitialLoginCommand from "../../../src/common/commands/InitialLoginCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractInitialLoginAction extends Action {

    constructor( hash) {
        super({hash}, 'common.InitialLoginAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new InitialLoginCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
