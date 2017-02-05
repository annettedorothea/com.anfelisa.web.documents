'use strict';

class AbstractCheckUsernameCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "CheckUsernameCommand");
        this.empty = "empty";
        this.available = "available";
        this.notAvailable = "notAvailable";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.empty:
        	promises.push(new FieldEmptyEvent(this.commandData).publish());
        	break;
        case this.available:
        	promises.push(new UsernameIsAvailableEvent(this.commandData).publish());
        	break;
        case this.notAvailable:
        	promises.push(new UsernameIsNotAvailableEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
