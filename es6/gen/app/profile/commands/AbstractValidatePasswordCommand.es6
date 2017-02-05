'use strict';

class AbstractValidatePasswordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "ValidatePasswordCommand");
        this.empty = "empty";
        this.ok = "ok";
        this.mismatch = "mismatch";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.empty:
        	promises.push(new PasswordEmptyEvent(this.commandData).publish());
        	break;
        case this.ok:
        	promises.push(new PasswordsOKEvent(this.commandData).publish());
        	break;
        case this.mismatch:
        	promises.push(new PasswordsMismatchEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
