'use strict';

class AbstractSubmitForgotPasswordRequestCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "SubmitForgotPasswordRequestCommand");
        this.dataInvalid = "dataInvalid";
        this.ok = "ok";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.dataInvalid:
        	promises.push(new ErrorEvent(this.commandData).publish());
        	break;
        case this.ok:
        	promises.push(new MessageEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
