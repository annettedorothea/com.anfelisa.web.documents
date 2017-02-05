'use strict';

class AbstractValidateRequiredFieldCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "ValidateRequiredFieldCommand");
        this.fieldEmpty = "fieldEmpty";
        this.fieldNotEmpty = "fieldNotEmpty";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.fieldEmpty:
        	promises.push(new FieldEmptyEvent(this.commandData).publish());
        	break;
        case this.fieldNotEmpty:
        	promises.push(new FieldNotEmptyEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
